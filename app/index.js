import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Botton } from '../components/Botton';
import { useRouter } from 'expo-router';
import { usePushNotifications } from '../lib/usePushNotification';
import { Button } from 'react-native';
import { sendPushNotification } from '../lib/sendPushnotification';
import { OrdersView } from '../components/OrdersView';


NativeWindStyleSheet.setOutput({
  default: 'native',
});


export default function App() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { expoPushToken, notification } = usePushNotifications();

  return (
    <OrdersView />
  );
}
//     <ImageBackground source={require('../assets/arena-negra.jpg')} style={{ flex: 1 }}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', paddingTop: insets.top }}>
//         <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//           {/* Botón Orders centrado y compacto */}
//           <View style={{ flexGrow: 0, alignItems: 'center', marginTop: 64, marginBottom: 32, height: '300' }}>
//             <Botton onPress={() => router.push('/orders')}>Orders</Botton>
//           </View>

//           {/* Notificaciones abajo, tamaño fijo */}
//           <View style={{
//             marginHorizontal: 16,
//             marginBottom: 24,
//             borderWidth: 1,
//             borderColor: 'rgba(255,255,255,0.5)',
//             borderRadius: 28,
//             paddingVertical: 18,
//             paddingHorizontal: 16,
//             backgroundColor: 'rgba(0,0,0,0.15)',
//             alignItems: 'center',
//             minHeight: 120,
//             maxHeight: 180,
//             justifyContent: 'center',
//           }}>
//             {/* Renderiza toda la lógica de notificaciones aquí */}
//             <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Notificaciones Push</Text>
//             <Text style={{ color: '#fff', fontSize: 12, marginBottom: 8 }}>
//               Your Expo push token: {expoPushToken || 'No token'}
//             </Text>
//             <View style={{ marginBottom: 8 }}>
//               <Text style={{ color: '#fff', fontSize: 12 }}>
//                 Title: {notification?.request?.content?.title || ''}
//               </Text>
//               <Text style={{ color: '#fff', fontSize: 12 }}>
//                 Body: {notification?.request?.content?.body || ''}
//               </Text>
//               <Text style={{ color: '#fff', fontSize: 12 }}>
//                 Data: {notification ? JSON.stringify(notification.request.content.data) : ''}
//               </Text>
//             </View>
//             <Button
//               title="Press to Send Notification"
//               onPress={() => sendPushNotification(expoPushToken)}
//               color="#FFD600"
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundImage: require('../assets/arena-negra.jpg'),
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
// }
