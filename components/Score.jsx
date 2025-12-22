import { Text } from 'react-native';

export const Score = ({ rate }) => {

    const getColorRate = () => {
        if (rate > 8) {
            return 'lightgreen';
        } else if (rate >= 7) {
            return 'gold';
        } else {
            return 'lightcoral';
        }
    }

    return (
        <>
                        <Text style={{color: getColorRate(), fontSize: 18, fontWeight: 'bold'}}>{rate}⭐</Text>
            
        </>
    );
}