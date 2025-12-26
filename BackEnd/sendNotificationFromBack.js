import dotenv from 'dotenv';
import { Supabase } from './supa-client.js';
import { sendPushNotification } from './sendNotification.js';

dotenv.config();

// Listener de cambios en la tabla orders
export function listenOrdersAndNotify() {
	const subscription = Supabase
		.channel('orders-changes')
		.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, async (payload) => {
			console.log('Nuevo Pedido:', payload);
			// Personaliza el mensaje según el evento
			let title = 'Nuevo Pedido';
			let body = '...';
			if (payload.eventType === 'INSERT') {
				title = 'Nuevo Pedido 🛎 💵';
				body = `Pedido de ${payload.new.customer_name || 'Cliente'} por $${payload.new.total ?? '0'}`;
			}
			
			await sendPushNotification({ title, body }); 
		})
		.subscribe();
	console.log('Escuchando cambios en la tabla orders...');
	return subscription;
}
