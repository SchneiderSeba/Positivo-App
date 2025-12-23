import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';

export const InfoIcon = ({ size = 24, color = 'white' }) => (
    <Link href="/" asChild>
        <FontAwesome5 name="info-circle" size={size} color={color} />
    </Link>
);