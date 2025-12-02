import React, { useEffect } from 'react';
import { MainWrapper } from '@components/layouts/main-wrapper';
import { SeatSelector } from '@components/organisms/seat-selector';
import { Heading } from '@components/atoms/heading';
import { withQueryProvider } from '@providers/query-provider';
import type { Seat } from '@type/studios';
import { Text } from '@components/atoms/text';
import { Button } from '@components/atoms/button';
import { formatCurrency } from '@lib/string';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { useSeatsQuery } from '@hooks/use-seats-query';
import { BookingInfoItem } from '@components/molecules/booking-info-item';

const CinemaSeatsPageContent = () => {
    const { bookingInfo, handleSeatClick, totalPayment, getSeatSelected, setSeatNumbers } = useBooking();
    const { studioId } = bookingInfo;
    const { data: seats = [], isLoading, isError } = useSeatsQuery(studioId);

    const seatSelected = getSeatSelected(seats);

    useEffect(() => {
        if (seatSelected) {
            setSeatNumbers(seatSelected);
        }
    }, [seatSelected, setSeatNumbers]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching seats</div>;

    const handleSeatChange = (seatVal: Seat) => {
        if (!seatVal.is_available) return;
        handleSeatClick(seatVal.id);
    }

    const handleBack = () => window.history.back();
    const handleOrder = () => window.location.replace('/order');

    return (
        <MainWrapper contentClassName='h-dvh'>
            <section className="flex flex-col gap-8 text-white">
                <Heading as="h1" size="xl" className='!text-4xl'>Seat</Heading>
                <SeatSelector seats={seats} onSeatChange={handleSeatChange} seatsId={bookingInfo.seatsId} />
            </section>
            <section className='absolute bottom-0 left-0 h-[141px] border-t border-t-white w-full px-4 flex items-center justify-between'>
                <div className='flex space-x-[104px]'>
                    <BookingInfoItem label='TOTAL' value={`Rp ${formatCurrency(totalPayment)}`} />
                    <BookingInfoItem label='SEAT' value={seatSelected || '-'} />
                </div>
                <div className='flex space-x-[30px] items-center justify-center'>
                    <Button className='h-[60px] w-[219px] rounded-[8px] text-[18px]' outline onClick={handleBack}>Back</Button>
                    <Button className='h-[60px] w-[279px] rounded-[8px] text-[18px]' onClick={handleOrder}>Proceed Payment</Button>
                </div>
            </section>
        </MainWrapper>
    )
}

const CinemaSeatsPageComponent = () => (
    <BookingProvider>
        <CinemaSeatsPageContent />
    </BookingProvider>
);

export const CinemaSeatsPage = withQueryProvider(CinemaSeatsPageComponent);