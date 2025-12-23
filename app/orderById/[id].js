import { OrderById } from '../../components/OrderById';  
import { useLocalSearchParams } from 'expo-router';

export default function OrderId() {

  const { id, status } = useLocalSearchParams();

  return (
    <>
        <OrderById id={id} status={status} />
    </>
  );
}