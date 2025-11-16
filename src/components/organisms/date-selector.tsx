import { Heading } from '@components/atoms/heading';
import { SelectorChip } from '@components/atoms/selector-chip';

interface DateSelectorProps {
    dates: { id: number; date: string }[];
    selectedDateId: number;
    onSelectDate: (dateId: number) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
    dates,
    selectedDateId,
    onSelectDate,
}) => {
    return (
        <div className="flex flex-col space-y-[37px]">
            <Heading size="xl">Date</Heading>
            <div className="flex space-x-[16px]">
                {dates.map((record) => (
                    <SelectorChip
                        key={record.id}
                        isSelected={selectedDateId === record.id}
                        onClick={() => onSelectDate(record.id)}
                        className="p-[15px] rounded-[8px] h-[85px] w-[85px]"
                    >
                        <p className="text-[16px] text-center">{record.date}</p>
                    </SelectorChip>
                ))}
            </div>
        </div>
    );
};
