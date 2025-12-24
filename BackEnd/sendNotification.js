import dotenv from 'dotenv';

dotenv.config()

const expoPushToken = process.env.EXPO_PUSH_TOKEN;

export async function sendPushNotification({ to, title, body, data }) {
    const message = {
        to: to || expoPushToken,
        sound: 'default',
        title: title || 'Notification',
        body: body || 'You have a new notification!',
        data: data || {},
    };

    try {
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });

        const data = await response.json();
        console.log('Push notification response:', data);

    } catch (error) {
        console.error('Error sending push notification:', error);
    }
}
