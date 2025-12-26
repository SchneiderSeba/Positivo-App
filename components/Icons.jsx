import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';

export const InfoIcon = ({ size = 24, color = 'white' }) => (
    <Link href="/" asChild>
        <FontAwesome5 name="info-circle" size={size} color={color} />
    </Link>
);

export const DownIcon = ({ size = 24, color = 'white' }) => (
    
        <FontAwesome5 name="angle-down" size={size} color={color} />
);

export const UpIcon = ({ size = 24, color = 'white' }) => (
    
        <FontAwesome5 name="angle-up" size={size} color={color} />
);