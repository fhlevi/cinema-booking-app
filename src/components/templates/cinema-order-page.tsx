import { MainWrapper } from '@components/layouts/main-wrapper';
import { BookingDetails } from '@components/organisms/booking-details';
import { TransactionDetails } from '@components/organisms/transaction-details';
import { CheckoutSection } from '@components/organisms/checkout-section';
import { datesStudio, timesStudio } from '@constants/studios';
import { withQueryProvider } from '@providers/query-provider';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { formatBookingDate } from '@lib/date';
import { useCallback } from 'react';

const CinemaOrderPageContent = () => {
    const { bookingInfo } = useBooking();
    const { date: dateId, time: timeId, seatsId, studioName, seatNumbers, studioId } = bookingInfo;

    const movieTitle = studioName ? studioName.toUpperCase() : 'Loading...';

    const dateObj = datesStudio.find(d => d.id === dateId);
    const date = dateObj ? formatBookingDate(dateObj.date) : 'Loading...';

    const timeObj = timesStudio.find(t => t.id === timeId);
    const time = timeObj ? timeObj.time : 'Loading...';

    const ticketCount = seatsId.length;

    const bookingData = {
        movieTitle,
        date,
        time,
        ticketCount,
        seatNumbers: seatNumbers || '-',
    };

    const seatPrice = 35000;
    const serviceChargeRate = 0.06;
    const serviceChargePerSeat = seatPrice * serviceChargeRate;
    const totalPayment = (seatPrice + serviceChargePerSeat) * ticketCount;

    const transactionData = {
        ticketCount,
        seatPrice,
        serviceChargePerSeat,
        totalPayment,
    };

    const handleCheckout = useCallback(() => {
        window.location.href = '/checkout';
    }, [studioId]);

    return (
        <MainWrapper contentClassName='h-dvh flex items-center justify-center'>
            <div className='flex flex-col space-y-16 text-white w-[391px]'>
                <BookingDetails {...bookingData} />
                <TransactionDetails {...transactionData} />
                <CheckoutSection onCheckout={handleCheckout} />
            </div>
        </MainWrapper>
    )
}

const CinemaOrderPageComponent = () => (
    <BookingProvider>
        <CinemaOrderPageContent />
    </BookingProvider>
)

export const CinemaOrderPage = withQueryProvider(CinemaOrderPageComponent);
