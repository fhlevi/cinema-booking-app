import { MainWrapper } from '@components/templates/main-wrapper';
import { BookingDetails } from '@components/organisms/booking-details';
import { TransactionDetails } from '@components/organisms/transaction-details';
import { CheckoutSection } from '@components/organisms/checkout-section';
import { useStudios } from '@hooks/use-studios';
import { datesStudio, timesStudio } from '@constants/studios';
import { useSeatsQuery } from '@hooks/use-seats-query';
import { withQueryProvider } from '@providers/query-provider';
import React from 'react';
import { BookingProvider, useBooking } from '@contexts/booking-context';

const formatBookingDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${weekday}, ${day} ${month} ${year}`;
};

const CinemaOrderPageContent = () => {
    const { bookingInfo, getSeatSelected } = useBooking();
    const { studioId, date: dateId, time: timeId, seatsId } = bookingInfo;

    const { data: studios = [] } = useStudios();
    const { data: seats = [] } = useSeatsQuery(studioId);

    const studio = studios.find(s => s.id === Number(studioId));
    const movieTitle = studio ? studio.name.toUpperCase() : 'Loading...';

    const dateObj = datesStudio.find(d => d.id === dateId);
    const date = dateObj ? formatBookingDate(dateObj.date) : 'Loading...';

    const timeObj = timesStudio.find(t => t.id === timeId);
    const time = timeObj ? timeObj.time : 'Loading...';

    const seatNumbers = getSeatSelected(seats) || '-';
    const ticketCount = seatsId.length;

    const bookingData = {
        movieTitle,
        date,
        time,
        ticketCount,
        seatNumbers,
    };

    return (
        <MainWrapper contentClassName='flex items-center justify-center'>
            <div className='flex flex-col space-y-16 text-white w-[391px]'>
                <BookingDetails {...bookingData} />
                <TransactionDetails />
                <CheckoutSection />
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
