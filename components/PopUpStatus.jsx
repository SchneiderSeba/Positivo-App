import { View, Text, Pressable, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import Icon from 'react-native-vector-icons/Feather';

const ICONS = {
    success: { name: 'check-circle', color: '#22c55e', bg: '#22c55e22' },
    info:    { name: 'info', color: '#38bdf8', bg: '#38bdf822' },
    warning: { name: 'alert-triangle', color: '#fbbf24', bg: '#fbbf2422' },
    error:   { name: 'x-circle', color: '#ef4444', bg: '#ef444422' },
};

export const PopUpStatus = ({ statusMessage = 'info', onClose, message }) => {
    // statusMessage: 'success' | 'info' | 'warning' | 'error'
    const [visible, setVisible] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const iconData = ICONS[statusMessage] || ICONS.info;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    useEffect(() => {
        if (!visible) return;
        const timer = setTimeout(() => {
            setVisible(false);
            onClose && onClose();
        }, 3500);
        return () => clearTimeout(timer);
    }, [visible, onClose]);

    let displayMessage = message;
    if (!displayMessage) {
        if (statusMessage === 'success') displayMessage = '¡Operación exitosa!';
        else if (statusMessage === 'error') displayMessage = 'Ha ocurrido un error.';
        else if (statusMessage === 'warning') displayMessage = 'Atención: revise los datos.';
        else displayMessage = 'Información.';
    }

    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 48,
                left: 0,
                right: 0,
                zIndex: 999,
                alignItems: 'center',
                opacity: fadeAnim,
                transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [-24, 0] }) }],
            }}
            pointerEvents={visible ? 'auto' : 'none'}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#18181bEE',
                    borderRadius: 18,
                    borderWidth: 1.5,
                    borderColor: iconData.color + '66',
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                    shadowColor: iconData.color,
                    shadowOpacity: 0.15,
                    shadowRadius: 12,
                    elevation: 8,
                    maxWidth: 340,
                    width: '90%',
                }}
            >
                <View style={{
                    height: 40, width: 40, borderRadius: 12, backgroundColor: iconData.bg,
                    alignItems: 'center', justifyContent: 'center', marginRight: 14,
                }}>
                    <Icon name={iconData.name} size={26} color={iconData.color} />
                </View>
                <Text style={{ flex: 1, color: '#fff', fontSize: 16, fontWeight: '500' }}>{displayMessage}</Text>
                <Pressable
                    onPress={() => { setVisible(false); onClose && onClose(); }}
                    style={{ marginLeft: 8, padding: 6, borderRadius: 16 }}
                    accessibilityLabel="Cerrar notificación"
                >
                    <Icon name="x" size={20} color="#fff" />
                </Pressable>
            </View>
        </Animated.View>
    );
}