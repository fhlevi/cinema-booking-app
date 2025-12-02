import React from 'react';
import { TicketTabsFilter } from '@components/molecules/ticket-tabs-filter';
import { TicketGrid } from '@components/organisms/ticket-grid';
// import { LoadingState } from '@components/atoms/loading-state';
// import { ErrorState } from '@components/atoms/error-state';
import type { Ticket } from '@type/studios';

interface Props {
    tabsFilter: string[];
    tabSelected: string;
    filteredTickets: Ticket[]
    onSelectFilter: (tab: string) => void
}

export const TicketListSection = ({
    tabsFilter, tabSelected, onSelectFilter,
    filteredTickets
}: Props) => {
    return (
        <div className="flex flex-col space-y-8">
            <TicketTabsFilter
                tabs={tabsFilter}
                selected={tabSelected}
                onSelectFilter={onSelectFilter}
            />
            <TicketGrid tickets={filteredTickets} />
        </div>
    );
};