import { View, Text, Pressable } from "react-native";

export const PopUpStatus = ({ statusMessage, onClose }) => {
    let message = '';
    let bgColor = '#22c55e'; // verde
    let textColor = '#166534'; // verde oscuro
    if (statusMessage === 'success') {
        message = '¡Operación exitosa!';
        bgColor = '#22c55e'; // verde
        textColor = '#166534';
    } else if (statusMessage === 'error') {
        message = 'Ha ocurrido un error.';
        bgColor = '#ef4444'; // rojo
        textColor = '#7f1d1d';
    }
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}>
            <View style={{ width: 300, padding: 24, backgroundColor: bgColor, borderRadius: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8, elevation: 8 }}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: textColor, fontWeight: 'bold', textAlign: 'center' }}>{message}</Text>
                <Pressable onPress={onClose} style={{ paddingVertical: 10, paddingHorizontal: 24, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 8 }}>
                    <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 16 }}>Cerrar</Text>
                </Pressable>
            </View>
        </View>
    );
}