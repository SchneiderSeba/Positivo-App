import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Botton } from '../components/Botton';
import { Link, useRouter } from 'expo-router';


NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function App() {

  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require('../assets/arena-negra.jpg')} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', paddingTop: insets.top * 2 }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 64,
        }}>
          <StatusBar style="dark" />
          <Text style={styles.text}>Hola Davi</Text>
          <Text style={{ fontFamily: 'Arial', color: '#fff' }}>Bienvenido a Positivo Outfit</Text>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Botton onPress={() => router.push('/orders')}>Orders</Botton>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: require('../assets/arena-negra.jpg'),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
