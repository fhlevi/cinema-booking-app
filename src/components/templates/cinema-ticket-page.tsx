import React from 'react';
import { MainWrapper } from '@components/layouts/main-wrapper';
import { BookingInfoItem } from '@components/molecules/booking-info-item';
import { withQueryProvider } from '@providers/query-provider';
import { BookingProvider } from '@contexts/booking-context';
import type { Seat, Ticket } from '@type/studios';
import { useQuery } from 'react-query';
import { getUserTickets } from '@services/booking';
import { cn } from '@lib/cn';
import { TicketListSection } from '@components/organisms/ticket-list-section';
import { TABS_FILTER } from '@constants/studios';

const CinameTicketPageContent = () => {
    const [tabSelected, setTabSelected] = React.useState<string>('Upcoming');

    const { data: tickets, isLoading, isError } = useQuery({
        queryKey: 'tickets',
        queryFn: getUserTickets
    });

    // Filter tickets based on selected tab
    const filteredTickets = React.useMemo(() => {
        if (!tickets) return [];
        
        return tickets.filter((ticket: Ticket) => {
            return tabSelected === 'Upcoming' 
                ? ticket.status === 'active'
                : ticket.status === 'used'
        });
    }, [tickets, tabSelected]);
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching movies</div>;

    return (
        <MainWrapper>
            <TicketListSection 
                tabsFilter={TABS_FILTER}
                tabSelected={tabSelected}
                filteredTickets={filteredTickets}
                onSelectFilter={setTabSelected}
            />
        </MainWrapper>
    )
}

const CinameTicketPageComponent = () => (
    <BookingProvider>
        <CinameTicketPageContent />
    </BookingProvider>
);

export const CinameTicketPage = withQueryProvider(CinameTicketPageComponent);