import { cn } from '@lib/cn';

interface TicketTabProps {
    tab: string;
    selected: string;
    onSelectFilter: (tab: string) => void;
}

export const TicketTab = ({ tab, selected, onSelectFilter }: TicketTabProps) => {
    const handleSelectTicket = () => onSelectFilter(tab);

    return (
        <button 
            className={cn(
                'flex gap-[14px] bg-transparent py-[4px] px-[9px] text-white rounded-full h-[40px] w-auto items-center cursor-pointer transition-colors',
                selected === tab ? 'bg-[#1DE782]' : 'border border-white'
            )} 
            onClick={handleSelectTicket}
        >
            {tab}
        </button>
    );
};