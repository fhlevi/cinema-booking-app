import { Text } from '@components/atoms/text';

interface TransactionItemProps {
    label: string;
    price: string;
    quantity: number;
}

export const TransactionItem = ({ label, price, quantity }: TransactionItemProps) => (
    <div className='flex items-center justify-between'>
        <Text className='text-base font-regular'>{label}</Text>
        <div className='flex space-x-4'>
            <Text className='text-base font-regular'>{price}</Text>
            <Text className='text-base font-semibold'>x{quantity}</Text>
        </div>
    </div>
);
