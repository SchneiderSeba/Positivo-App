import { Pressable, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export const Botton = ({ onPress, children }) => {
  const isBack = children === 'Back';
  return (
    <Pressable
      onPress={onPress}
      style={
        isBack
          ? { marginTop: 40, alignSelf: 'center' }
          : { position: 'absolute', bottom: 50, left: '50%', marginLeft: -50 }
      }
    >
      <LinearGradient
        colors={isBack ? ['#fff', 'lightgreen', 'transparent'] : ['#fff', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: 100, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{children}</Text>
      </LinearGradient>
    </Pressable>
  );
}