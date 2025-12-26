import { View, Text, Pressable } from "react-native";
import { FlatList, ImageBackground, ActivityIndicator} from "react-native";
import { Botton } from "./Botton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { getOrders } from "../lib/api-orders-positivo";
import { useEffect, useState, useRef } from "react";
import { Supabase } from "../lib/Supa-Client";
import { usePushNotifications } from "../lib/usePushNotification";
import { StatusBar } from "expo-status-bar";
import { QuickOrderView, QuickOrderViewSmall } from "./QuickOrderView";


export const OrdersView = () => {

    const [ordersData, setOrdersData] = useState([]);
    const previousOrdersLength = useRef(0);
    const { expoPushToken } = usePushNotifications();
    const [openOrders, setOpenOrders] = useState({});
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrders();
            setOrdersData(data);
        };
        fetchOrders();

        const subscription = Supabase
        .channel('orders-changes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, 
            payload => {
            // console.log('Change received!', payload);
            // Refresca la lista de pedidos al recibir un cambio
            // getOrders().then(data => setOrdersData(data));
            fetchOrders()
        })
        .subscribe();

        return () => {
            Supabase.removeChannel(subscription);
        }
    }, []);

    console.log('Previous orders:', previousOrdersLength);
    
    const handleToggle = (id) => {
        setOpenOrders(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
        <ImageBackground source={require('../assets/arena-negra.jpg')} style={{flex: 1}}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', padding: 40 }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                {/* <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Pedidos</Text> */}
            </View>
            <View style={{ backgroundColor: 'transparent', width: '90%', marginBottom: 0, marginTop: 80 }} >

                {ordersData.length === 0 && (
                    <ActivityIndicator size="large" color="#ffffff" className="mb-8" />
                )}

                <FlatList
                    data={[...ordersData]}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    renderItem={({ item }) => (
                        openOrders[item.id]

                        ?
                            <QuickOrderView item={item} handleShow={() => handleToggle(item.id)} show={openOrders[item.id]} /> 
                        :
                            <QuickOrderViewSmall item={item} handleShow={() => handleToggle(item.id)} show={openOrders[item.id]} />
                    )}

                />
                
                    
                    
                
            </View>
            <Botton onPress={() => router.back()}>
                Back
            </Botton>
            </SafeAreaView>
        </ImageBackground>
    </>
  )
}