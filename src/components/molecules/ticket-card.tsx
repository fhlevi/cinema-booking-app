import { BookingInfoItem } from '@components/molecules/booking-info-item';
import type { Seat, Ticket } from '@type/studios';

interface TicketCardProps {
    ticket: Ticket;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
    const formatSeatSelected = (seats: Pick<Seat, 'id' | 'seat_number'>[]) => {
        return seats
            .map(seat => seat.seat_number)
            .join(', ');
    };
    
    return (
        <div className='border border-[#DDDEDF] p-5 min-h-[408px] rounded-xl flex flex-col space-y-10'>
            <BookingInfoItem 
                label="Movie Title" 
                value={ticket.studio.name} 
            />
            <BookingInfoItem 
                label={`Tiket (${ticket.seats.length})`} 
                value={formatSeatSelected(ticket.seats)} 
            />
            <img 
                src={ticket?.qr_code} 
                alt={`QR Code for ${ticket.studio.name}`}
                className='h-34 w-34' 
            />
        </div>
    );
};