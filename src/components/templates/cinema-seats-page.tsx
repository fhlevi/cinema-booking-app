import React, { useEffect } from 'react';
import { MainWrapper } from '@components/templates/main-wrapper';
import { SeatSelector } from '@components/organisms/seat-selector';
import { Heading } from '@components/atoms/heading';
import { withQueryProvider } from '@providers/query-provider';
import type { Seat } from '@type/studios';
import { Text } from '@components/atoms/text';
import { Button } from '@components/atoms/button';
import { formatCurrency } from '@lib/string';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { useSeatsQuery } from '@hooks/use-seats-query';

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

    const handleBack = () => window.history.back();
    const handleOrder = () => window.location.href = '/order';

    return (
        <MainWrapper contentClassName='h-dvh'>
            <section className="flex flex-col gap-8 text-white">
                <Heading as="h1" size="xl" className='!text-4xl'>Seat</Heading>
                <SeatSelector seats={seats} onSeatChange={handleSeatClick} seatsId={bookingInfo.seatsId} />
            </section>
            <section className='absolute bottom-0 left-0 h-[141px] border-t border-t-white w-full px-4 flex items-center justify-between'>
                <div className='flex space-x-[104px]'>
                    <div className='flex flex-col space-y-[6px]'>
                        <Text className='text-[18px] font-medium'>TOTAL</Text>
                        <Text className='text-[26px] font-bold'>Rp {formatCurrency(totalPayment)}</Text>
                    </div>
                    <div className='flex flex-col space-y-[6px]'>
                        <Text className='text-[18px] font-medium'>SEAT</Text>
                        <Text className='text-[26px] font-bold'>{seatSelected || '-'}</Text>
                    </div>
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