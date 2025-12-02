import { Text } from '@components/atoms/text';
import { Button } from '@components/atoms/button';

interface CheckoutSectionProps {
    onCheckout: () => void;
    isLoading?: boolean;
}

export const CheckoutSection = ({ onCheckout, isLoading = false }: CheckoutSectionProps) => {
    return (
        <section className='flex flex-col space-y-5'>
            <Text>*Purchased ticket cannot be canceled</Text>
            <Button
                className='rounded-md text-xl'
                onClick={onCheckout}
                disabled={isLoading}
            >
                {isLoading ? 'Processing...' : 'Checkout Ticket'}
            </Button>
        </section>
    );
};
