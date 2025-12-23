import { useEffect, useState } from "react"
import { getOrderById, updateOrderStatus } from "../lib/api-orders-positivo";
import { View, Text, Pressable, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Botton } from "./Botton";
import { PopUpStatus } from "./PopUpStatus";
import { Supabase } from "../lib/Supa-Client";
import { BlurView } from "expo-blur";

export const OrderById = ({ id, status }) => {

    const [order, setOrder] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');

    const router = useRouter();
    const params = useLocalSearchParams();

    const handlePopUpClose = () => {
        setShowPopUp(false);
        // Recarga la pantalla actual
        router.replace({
            pathname: router.pathname,
            params: params,
        });
    };

    useEffect(() => {
        const fetchOrderById = async () => {
            try {
                const data = await getOrderById(id);
                setOrder(data);

                const subscription = Supabase
                    .channel(`order-by-id-${id}-changes`)
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders', filter: `id=eq.${id}` }, 
                        payload => {
                            console.log('Change received for order ID', id, '!', payload);
                            // Refresca los datos del pedido al recibir un cambio
                            getOrderById(id).then(data => setOrder(data));
                        }
                    )
                    .subscribe();

                // Limpieza al desmontar
                return () => {
                    Supabase.removeChannel(subscription);
                };
            } catch (error) {
                console.error('Failed to fetch order by ID:', error);
            }
        };

        fetchOrderById();
    }, [id, status]);

    // console.log('Order data fetched by ID:', order);

    console.log('Order IDs prop:', id);

    // Sombra dinámica según status
    let shadowColor = '#38bdf8'; // info (azul)
    if (order?.status === 'completed') shadowColor = '#22c55e'; // verde
    else if (order?.status === 'pending') shadowColor = '#fbbf24'; // amarillo
    else if (order?.status === 'error') shadowColor = '#ef4444'; // rojo

    return (
        <ImageBackground source={require('../assets/arena-negra.jpg')} style={{flex: 1}}>
            <SafeAreaView className="flex-1 bg-transparent items-center justify-center p-4">
                <BlurView intensity={90} tint="dark" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                {/* Sombra externa */}
                <Stack.Screen
                        options={{
                            headerTitle: `${order?.customer_name}` || 'Cargando...',
                            headerTitleAlign: 'center', // <-- Esto centra el título
                            headerStyle: { backgroundColor: `${shadowColor}` + `85`},
                            headerLeft: () => null,
                            headerRight: () => null,
                        }}
                />

                <View
                    style={{
                        shadowColor: shadowColor,
                        shadowOpacity: 0.18,
                        shadowRadius: 16,
                        elevation: 12,
                        borderRadius: 24,
                        marginBottom: 8,
                        backgroundColor: 'transparent',
                    }}
                >
                    <View
                        className="p-4 m-2 rounded-2xl w-80 border border-white/30"
                        style={{ minHeight: 150, borderRadius: 24, backgroundColor: '#222' }}
                    >
                    {order === null && (
                        <ActivityIndicator size="large" color="#ffffff" className="m-8" />
                    )}
                    {/* Info del pedido y productos */}
                    {order && (
                        <View className="bg-transparent">
                            {/* Info general del pedido */}
                            <Text className="text-white text-base mb-1">Tel: {order.customer_phone}</Text>
                            <Text className="text-white text-base mb-1">Entrega: {order.delivery_method}</Text>
                            {order.delivery_method === 'delivery' && (
                                <Text className="text-white text-base mb-1">Dirección: {order.delivery_address}</Text>
                            )}
                            {/* Productos */}
                            <Text className="text-white text-base font-semibold mt-2 mb-1">Productos:</Text>
                            {order.items && order.items.length > 0 ? (
                                order.items.map((item) => (
                                    <View key={item.id} style={{ marginBottom: 8 }}>
                                        <Text className="text-white text-base">Producto: {item.product_name}</Text>
                                        <Text className="text-white text-base">Cantidad: {item.quantity}</Text>
                                        <Text className="text-white text-base">Talle: {item.product_size}</Text>
                                    </View>
                                ))
                            ) : (
                                <ActivityIndicator size="small" color="#ffffff" className="mb-4" />
                            )}
                            {/* Estado */}
                            {order.status === 'pending' && (
                                <Text className="text-white text-base mt-2">Estado:
                                    <Text className="text-yellow-300 text-base font-bold"> Pendiente</Text>
                                </Text>
                            )}
                            {order.status === 'completed' && (
                                <Text className="text-white text-base mt-2">Estado:
                                    <Text className="text-green-300 text-base font-bold"> Listo</Text>
                                </Text>
                            )}
                        </View>
                    )}
                    {/* Separador Horizontal */}
                    <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.3)', width: '80%', marginVertical: 16, alignSelf: 'center' }} />
                    {/* Botón abajo */}
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable
                            onPress={async () => {
                                const result = await updateOrderStatus(id, 'completed');
                                if (result.success) {
                                // Refresca los datos del pedido
                                const data = await getOrderById(id);
                                setOrder(data);
                                setPopUpMessage('success');
                                } else {
                                setPopUpMessage('error');
                                }
                                setShowPopUp(true);
                                // Cierra el pop-up después de 2 segundos
                                setTimeout(() => {
                                    setShowPopUp(false);
                                }, 2000);
                            }}
                            style={{ width: '100%', marginVertical: 6, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                        >
                            <Text className="text-white text-center font-semibold">Finalizar</Text>
                        </Pressable>

                        {showPopUp && (
                            <PopUpStatus
                                statusMessage={popUpMessage}
                                onClose={handlePopUpClose}
                            />
                        )}
                    </View>
                    </View>
                </View>
                <Botton onPress={() => router.back()} >Back</Botton>
            </SafeAreaView>
        </ImageBackground>
    );
}