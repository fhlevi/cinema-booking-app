import { Text } from '@components/atoms/text';
import { TransactionItem } from '@components/molecules/transaction-item';
import { TotalPayment } from '@components/molecules/total-payment';

export const TransactionDetails = () => {
    return (
        <section className='flex flex-col space-y-2.5'>
            <Text className='text-lg font-medium'>Transaction Detail</Text>
            <TransactionItem label="REGULAR SEAT" price="RM 55.70" quantity={3} />
            <TransactionItem label="Service Charge (6%)" price="RM 3.30" quantity={3} />
            <TotalPayment label="Total payment" amount="RM 62.10" />
        </section>
    );
};
