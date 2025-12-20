import { Image } from 'react-native';

export const Logo = () => {
  return (
    <>
    
        <Image source={require('../assets/Logo-Transp.png')} style={{width: 50, height: 50, margin: 20}} resizeMode="contain" />

    </>
    );
};