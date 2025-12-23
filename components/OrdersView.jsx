import { View, Text, Pressable } from "react-native";
import { FlatList } from "react-native";
import { Botton } from "./Botton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { getOrders } from "../lib/api-orders-positivo";
import { useEffect, useState } from "react";
import { Supabase } from "../lib/Supa-Client";


export const OrdersView = () => {

    const [ordersData, setOrdersData] = useState([]);

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

    console.log('Orders data fetched:', ordersData);

    const router = useRouter();

  return (
    <>
        <SafeAreaView className="flex-1 bg-black/80 items-center justify-center p-4">
          <Text className="text-white text-lg font-semibold mb-4">Orders View</Text>
          <FlatList
            data={[...ordersData]}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            renderItem={({ item }) => (
              <View
                className="flex-row bg-black/20 p-4 m-2 rounded-2xl w-80 border border-white/30"
                style={{ minHeight: 150, alignItems: 'center' }}
              >
                {/* Columna izquierda: textos */}
                <View style={{ flex: 2, paddingRight: 10 }}>
                    <Text className="text-white text-base mb-2">{item.customer_name}</Text>
                    <Text className="text-white text-base">Tel: {item.customer_phone}</Text>
                    <Text className="text-white text-base">Status: {item.status}</Text>
                    <Text className="text-white text-base">Entrega: {item.delivery_method}</Text>
                    {item.delivery_method === 'delivery' && (
                      <Text className="text-white text-base">Direccion: {item.delivery_address}</Text>
                    )}
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
            )}
          />
          <Botton onPress={() => router.back()}>
            Back
          </Botton>
        </SafeAreaView>
    </>
  )
}