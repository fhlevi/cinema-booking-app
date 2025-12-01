import { Text } from '@components/atoms/text';

interface BookingInfoItemProps {
    label: string;
    value: string;
}

export const BookingInfoItem = ({ label, value }: BookingInfoItemProps) => (
    <div className='flex flex-col space-y-2'>
        <Text className='text-lg font-regular'>{label}</Text>
        <Text className='text-2xl font-medium'>{value}</Text>
    </div>
);
