import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { DownIcon, UpIcon } from "./Icons";

export const QuickOrderView = ({ item, handleShow }) => {

    const getEstado = (status) => {
        if (status === 'pending') {
            return 'Pendiente';
        } else if (status === 'completed') {
            return 'Completado';
        } else {
            return 'Desconocido';
        }
    }

  return (
    
                            <View
                                className="flex-row bg-black/20 p-4 m-2 rounded-2xl w-80 border border-white/30"
                                style={{ minHeight: "auto", alignItems: 'center' }}
                            >

                                {/* Columna izquierda: textos */}
                                <View style={{ flex: 2, paddingRight: 10 }}>
                                    <Text className="text-white text-base mb-2">{item.customer_name}</Text>
                                    <Text className="text-white text-base">Tel: {item.customer_phone}</Text>
                                    {item.status === 'pending' ?
                                    <Text className="text-white text-base">Status: <Text className="text-yellow-300 text-base font-bold">{getEstado(item.status)}</Text></Text>
                                    :
                                    <Text className="text-white text-base">Status: <Text className="text-green-300 text-base font-bold">{getEstado(item.status)}</Text></Text>
                                    }
                                    <Text className="text-white text-base">Entrega: {item.delivery_method}</Text>
                                </View>
                                {/* Separador vertical */}
                                <View style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.3)', height: '80%', marginHorizontal: 8 }} />
                                {/* Columna derecha: botones */}
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingHorizontal: 4 }}>
                                <Pressable
                                    onPress={() => router.push({ pathname: `/orderById/${item.id}`, params: { status: getEstado(item.status) } })}
                                    style={{ width: '100%', marginVertical: 6, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                                >
                                    <Text className="text-white text-center font-semibold">View</Text>
                                </Pressable>
                                <Pressable
                                    onPress={handleShow}
                                    style={{ width: '100%', height: 40, marginVertical: 6, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                                >
                                    <UpIcon color="#fff" size={20} />
                                </Pressable>
                                </View>
                            </View>
    );
  
}

export const QuickOrderViewSmall = ({ item, handleShow }) => {

    const getEstado = (status) => {
        if (status === 'pending') {
            return 'Pendiente';
        } else if (status === 'completed') {
            return 'Completado';
        } else {
            return 'Desconocido';
        }
    }

  return (
                            <View
                                className="flex-row bg-black/20 p-4 m-2 rounded-2xl w-80 border border-white/30"
                                style={{ minHeight: "auto", alignItems: 'center' }}
                            >

                                {/* Columna izquierda: textos */}
                                <View style={{ flex: 2, paddingRight: 10 }}>
                                    <Text className="text-white text-base mb-2">{item.customer_name}</Text>
                                    {item.status === 'pending' ?
                                    <Text className="text-white text-base">Status: <Text className="text-yellow-300 text-base font-bold">{getEstado(item.status)}</Text></Text>
                                    :
                                    <Text className="text-white text-base">Status: <Text className="text-green-300 text-base font-bold">{getEstado(item.status)}</Text></Text>
                                    }
                                </View>
                                {/* Separador vertical */}
                                <View style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.3)', height: '80%', marginHorizontal: 8 }} />
                                {/* Columna derecha: botones */}
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingHorizontal: 4 }}>

                                <Pressable
                                    onPress={handleShow}
                                    style={{ width: '100%', height: 40, marginVertical: 6, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 6 }}
                                >
                                    <DownIcon color="#fff" size={20} />
                                </Pressable>
                                </View>
                            </View>
  );
}