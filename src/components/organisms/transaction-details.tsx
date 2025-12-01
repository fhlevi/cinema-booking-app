import { Text } from '@components/atoms/text';
import { TransactionItem } from '@components/molecules/transaction-item';
import { TotalPayment } from '@components/molecules/total-payment';
import { formatCurrency } from '@lib/string';

interface TransactionDetailsProps {
    ticketCount: number;
    seatPrice: number;
    serviceChargePerSeat: number;
    totalPayment: number;
}

export const TransactionDetails = ({
    ticketCount,
    seatPrice,
    serviceChargePerSeat,
    totalPayment,
}: TransactionDetailsProps) => {
    if (ticketCount === 0) {
        return null;
    }

    return (
        <section className='flex flex-col space-y-2.5'>
            <Text className='text-lg font-medium'>Transaction Detail</Text>
            <TransactionItem
                label="REGULAR SEAT"
                price={`Rp ${formatCurrency(seatPrice)}`}
                quantity={ticketCount}
            />
            <TransactionItem
                label="Service Charge (6%)"
                price={`Rp ${formatCurrency(serviceChargePerSeat)}`}
                quantity={ticketCount}
            />
            <TotalPayment
                label="Total payment"
                amount={`Rp ${formatCurrency(totalPayment)}`}
            />
        </section>
    );
};
