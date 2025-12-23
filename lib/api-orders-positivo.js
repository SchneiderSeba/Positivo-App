import axios from 'axios';
import { Supabase } from '../lib/Supa-Client';

export const getOrders = async () => {
    try {
        const  { data, error }  = await Supabase
            .from('orders')
            .select('*');
        if (error) {
            console.error('Error fetching orders from Supabase:', error);
            return [];
        }
        return data;
    } catch (error) {
        console.error('Unexpected error fetching orders:', error);
        return [];
    }
}

export const getOrderById = async (id) => {
    try {
        // Consulta el pedido
        const { data: order, error: orderError } = await Supabase
            .from('orders')
            .select('*')
            .eq('id', id)
            .single();

        if (orderError) throw orderError;

        // Consulta los items
        const { data: items, error: itemsError } = await Supabase
            .from('order_items')
            .select('*')
            .eq('order_id', id);

        if (itemsError) throw itemsError;

        return {
            ...order,
            items: items || []
        };
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        return null;
    }
}

export async function updateOrderStatus(id, status)  {
  try {
    const { error } = await Supabase
      .from('orders')
      .update({ status })
      .eq('id', id)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error updating order status:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    }
  }
}