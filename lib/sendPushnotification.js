

export const sendPushNotification = async (expoPushToken, data = {}) => {
    const message = {
      to: expoPushToken,
      sound: 'true',
      title: data.title || 'Positivo Outfit - Nuevo Pedido',
      body: data.body || 'Detalles del Pedido 💵🪙',
      data: { ...data, someData: 'goes here', "url": "/orders" },  
    }

    await fetch('http://192.168.1.36:3000/send-notification', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
  };