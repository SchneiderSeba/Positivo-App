import { Slot, Stack } from 'expo-router';
import { Logo } from '../components/Logo';
import { Text, ImageBackground } from 'react-native';
import { InfoIcon } from '../components/Icons';

export default function Layout() {
  return (
            <Stack screenOptions={{
                                    headerTitle: '',
                                    headerTransparent: true,
                                    headerLeft: () => <><Logo /><Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Positivo Outfit</Text></>,
                                    headerRight: () => <InfoIcon size={24} color="white" />
                                  }}/>

  )
}