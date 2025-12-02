import { TicketTab } from '@components/atoms/ticket-tab';

interface TicketTabsFilterProps {
    tabs: string[];
    selected: string;
    onSelectFilter: (tab: string) => void;
}

export const TicketTabsFilter = ({ tabs, selected, onSelectFilter }: TicketTabsFilterProps) => {
    return (
        <section className='flex space-x-1.5 items-center justify-center'>
            {tabs.map((tab) => (
                <TicketTab 
                    key={tab}
                    tab={tab} 
                    selected={selected} 
                    onSelectFilter={onSelectFilter} 
                />
            ))}
        </section>
    );
};