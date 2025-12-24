import { Slot, Stack } from 'expo-router';
import { Logo } from '../components/Logo';
import { Text, ImageBackground } from 'react-native';
import { InfoIcon } from '../components/Icons';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { router } from 'expo-router';

function useNotificationObserver() {
  useEffect(() => {
    function redirect(notification) {
      const url = notification.request.content.data?.url;
      if (typeof url === 'string') {
      router.push(url);
      }
    }

    const response = Notifications.getLastNotificationResponse();
    if (response?.notification) {
      redirect(response.notification);
    }

    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      redirect(response.notification);
    });

    return () => {
      subscription.remove();
    };
  }, []);
}

export default function Layout() {

  useNotificationObserver();
  
  return (
            <Stack screenOptions={{
                                    headerTitle: '',
                                    headerTransparent: true,
                                    headerLeft: () => <><Logo /><Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Positivo Outfit</Text></>,
                                    headerRight: () => <InfoIcon size={24} color="white" />,
                                    animation: "slide_from_right",
                                  }}/>

  )
}