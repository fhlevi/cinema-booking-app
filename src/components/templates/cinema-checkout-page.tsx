import { MainWrapper } from '@components/layouts/main-wrapper';
import { withQueryProvider } from '@providers/query-provider';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { useMutation } from 'react-query';
import React, { useCallback } from 'react';
import { checkoutTicket } from '@services/booking';
import { Button } from '@components/atoms/button';
import { Text } from '@components/atoms/text';
import { Heading } from '@components/atoms/heading';
import { BookingInfoItem } from '@components/molecules/booking-info-item';
import { datesStudio, timesStudio } from '@constants/studios';
import { formatBookingDate } from '@lib/date';

const CinemaCheckoutPageContent = () => {
    const [isDetail, setIsDetail] = React.useState(false);
    const { bookingInfo } = useBooking();
    const { date: dateId, time: timeId, seatsId, studioName, seatNumbers, studioId } = bookingInfo;
    
    const movieTitle = studioName ? studioName.toUpperCase() : 'Loading...';

    const dateObj = datesStudio.find(d => d.id === dateId);
    const date = dateObj ? formatBookingDate(dateObj.date) : 'Loading...';

    const timeObj = timesStudio.find(t => t.id === timeId);
    const time = timeObj ? timeObj.time : 'Loading...';

    const ticketCount = seatsId.length;

    const cinemaBookingMutation = useMutation(checkoutTicket);

    const handleCheckout = useCallback(() => {
        if (studioId === '' || ticketCount === 0) {
            console.error('failed to reserve seats');
            return;
        }

        cinemaBookingMutation.mutate({ studioId: Number(studioId), seatIds: seatsId });
    }, [seatsId, studioId]);

    React.useEffect(() => {
        handleCheckout();
    }, [handleCheckout]);

    const handleViewDetail = useCallback(() => setIsDetail(true), [isDetail]);
    const handleBackToHome = () => {
        window.location.href = '/';
    }

    if (cinemaBookingMutation.isLoading) return 'Loading...';

    if (cinemaBookingMutation.isError) handleBackToHome();

    if (cinemaBookingMutation.isSuccess && !isDetail) {
        return (
            <MainWrapper contentClassName='h-dvh flex items-center justify-center'>
                <div className='flex flex-col space-y-16 text-white w-[389px] items-center'>
                    <Text className='text-4xl font-semibold'>Ticket Booked</Text>
                    <img src="/assets/images/logo/icon-check.png" alt="" />
                    <div className='flex flex-col space-y-5 w-full'>
                        <Button className='rounded-md h-[68px] text-2xl' onClick={handleViewDetail}>View Ticket</Button>
                        <Button className='rounded-md h-[68px] text-2xl' onClick={handleBackToHome} outline>Back to Homepage</Button>
                    </div>
                </div>
            </MainWrapper>
        )
    }

    const responseData = cinemaBookingMutation.data;

    return (
        <MainWrapper contentClassName='flex flex-col space-y-8'>
            <Heading as="h1" size="xl" className='!text-4xl'>Ticket Detail</Heading>

            <section className="flex flex-col items-center justify-center text-white space-y-[204px]">
                <div className='border border-[#DDDEDF] p-5 min-h-[408px] w-[355px] rounded-xl flex flex-col space-y-10'>
                    <BookingInfoItem label="Date" value={date} />
                    <BookingInfoItem label="Movie Title" value={movieTitle} />
                    
                    <div className='flex items-center justify-between'>
                        <BookingInfoItem label={`Tiket (${ticketCount})`} value={seatNumbers} />
                        <BookingInfoItem label="Hours" value={time} />
                    </div>

                    <img src={responseData?.qrCode} alt="qr_code" className='h-34 w-34' />
                </div>

                <Button className='rounded-md w-[355px] h-[68px] text-2xl' onClick={handleBackToHome} outline>Back to Homepage</Button>
            </section>
        </MainWrapper>
    )
}

const CinemaCheckoutPageComponent = () => (
    <BookingProvider>
        <CinemaCheckoutPageContent />
    </BookingProvider>
)

export const CinemaCheckoutPage = withQueryProvider(CinemaCheckoutPageComponent);
