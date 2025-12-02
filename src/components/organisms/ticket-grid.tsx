import { TicketCard } from '@components/molecules/ticket-card';
import type { Ticket } from '@type/studios';

interface TicketGridProps {
    tickets: Ticket[];
}

export const TicketGrid = ({ tickets }: TicketGridProps) => {
    if (tickets.length === 0) {
        return (
            <div className='text-center text-white py-10'>
                <p>No tickets found</p>
            </div>
        );
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[29px]'>
            {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </section>
    );
};