import { Text } from '@components/atoms/text';

interface TotalPaymentProps {
    label: string;
    amount: string;
}

export const TotalPayment = ({ label, amount }: TotalPaymentProps) => (
    <div className='flex items-center justify-between text-lg font-medium border-t border-b border-[#C4C4C4] py-2.5'>
        <Text>{label}</Text>
        <Text>{amount}</Text>
    </div>
);
