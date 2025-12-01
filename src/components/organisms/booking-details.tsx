import { Heading } from '@components/atoms/heading';
import { Text } from '@components/atoms/text';
import { BookingInfoItem } from '@components/molecules/booking-info-item';

interface BookingDetailsProps {
    movieTitle: string;
    date: string;
    time: string;
    ticketCount: number;
    seatNumbers: string;
}

export const BookingDetails = ({ movieTitle, date, time, ticketCount, seatNumbers }: BookingDetailsProps) => {
    return (
        <section className='flex flex-col space-y-5'>
            <Heading as='h3' className='font-semibold text-4xl'>Booking Detail</Heading>
            <Text className='text-2xl font-medium'>Schedule</Text>
            <BookingInfoItem label="Movie Title" value={movieTitle} />
            <BookingInfoItem label="Date" value={date} />
            <div className='flex items-center justify-between'>
                <BookingInfoItem label={`Tiket (${ticketCount})`} value={seatNumbers} />
                <BookingInfoItem label="Hours" value={time} />
            </div>
        </section>
    );
};
