import { View, Text, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Botton } from "./Botton";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const ordersData = [
    { id: '1', item: 'Product 1', quantity: 2, price: 19.99 },
    { id: '2', item: 'Product 2', quantity: 1, price: 9.99 },
    { id: '3', item: 'Product 3', quantity: 4, price: 29.99 },
    // Add more orders as needed
];

export const OrdersView = () => {

    const router = useRouter();

  return (
    <>
        <SafeAreaView className="flex-1 bg-white items-center justify-center p-4 bg-black/80" />

            <ScrollView className="w-full h-full bg-black/80" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>

                <Text className="text-white text-lg font-semibold mb-4">Orders View</Text>

                <FlatList
                    data={ordersData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className="bg-black/20 p-4 m-2 rounded-lg w-80">
                            <Text className="text-white font-bold">Item: {item.item}</Text>
                            <Text className="text-white">Quantity: {item.quantity}</Text>
                            <Text className="text-white">Price: ${item.price.toFixed(2)}</Text>
                        </View>
                    )}
                />

                <Botton onPress={() => router.back()}>
                    Back
                </Botton>

            </ScrollView>
    </>
  )
}