import { Supabase } from "./supa-client";

export const ordersListener = async () => {
    try {
            const subscription = Supabase
                    .channel('orders-changes')
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, 
                        payload => {
                    })
                    .subscribe();
            
                    return () => {
                        Supabase.removeChannel(subscription);
                    }
        } catch (error){
            console.error('Error creating Supabase subscription:', error);
        }
        return true
};

// Falta hacer que si el listenber dice si , se ejecute el Send Notifications