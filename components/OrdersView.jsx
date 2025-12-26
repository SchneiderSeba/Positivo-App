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


export const OrdersView = () => {

    const [ordersData, setOrdersData] = useState([]);
    const previousOrdersLength = useRef(0);
    const { expoPushToken } = usePushNotifications();
    const [show, setShow] = useState(false);

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

    const handleShow = () => {  
        setShow(!show);
    }

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
                        show && (
                        <View
                            className="flex-row bg-black/20 p-4 m-2 rounded-2xl w-80 border border-white/30"
                            style={{ minHeight: 150, alignItems: 'center' }}
                        >

                            {/* Columna izquierda: textos */}
                            <View style={{ flex: 2, paddingRight: 10 }}>
                                <Text className="text-white text-base mb-2">{item.customer_name}</Text>
                                <Text className="text-white text-base">Tel: {item.customer_phone}</Text>
                                {item.status === 'pending' ?
                                <Text className="text-white text-base">Status: <Text className="text-yellow-300 text-base font-bold">{item.status}</Text></Text>
                                :
                                <Text className="text-white text-base">Status: <Text className="text-green-300 text-base font-bold">{item.status}</Text></Text>
                                }
                                <Text className="text-white text-base">Entrega: {item.delivery_method}</Text>
                            </View>
                            {/* Separador vertical */}
                            <View style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.3)', height: '80%', marginHorizontal: 8 }} />
                            {/* Columna derecha: botones */}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingHorizontal: 4 }}>
                            <Pressable
                                onPress={() => router.push({ pathname: `/orderById/${item.id}`, params: { status: item.status } })}
                                style={{ width: '100%', marginVertical: 6, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                            >
                                <Text className="text-white text-center font-semibold">View</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => router.push('/')}
                                style={{ width: '100%', marginVertical: 6, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                            >
                                <Text className="text-white text-center font-semibold">Reorder</Text>
                            </Pressable>
                            </View>
                        </View>
                        )
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