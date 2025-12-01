import { Text } from '@components/atoms/text';
import { Button } from '@components/atoms/button';

export const CheckoutSection = () => {
    return (
        <section className='flex flex-col space-y-5'>
            <Text>*Purchased ticket cannot be canceled</Text>
            <Button className='rounded-md text-xl'>Checkout Ticket</Button>
        </section>
    );
};
