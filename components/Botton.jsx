import { Pressable, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export const Botton = ({ onPress, children }) => {
  const isBack = children === 'Back';
  const isOrder = children === 'Orders';
  return (
    <Pressable
      onPress={onPress}
      style={
        isBack
          ? { marginTop: 40, alignSelf: 'center' }
          : isOrder
            ? { flex: 1, flexDirection: 'row', top: 10, alignContent: 'center', justifyContent: 'center' }
            : { flex: 1, flexDirection: 'row', top: 50, alignContent: 'center', justifyContent: 'center' }
      }
    >
      <LinearGradient
        colors={isBack ? ['#fff', 'lightgreen', 'transparent'] 
            : isOrder ? ['#ffff00', 'transparent'] : ['#fff', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: 100, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{children}</Text>
      </LinearGradient>
    </Pressable>
  );
}