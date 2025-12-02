import { Heading } from '@components/atoms/heading';
import { SelectorChip } from '@components/atoms/selector-chip';
import { formatDateShort } from '@lib/date';
import type { StudioDate } from '@type/studios';

interface DateSelectorProps {
    dates: StudioDate[];
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
                        <p className="text-[16px] text-center">{formatDateShort(record.date)}</p>
                    </SelectorChip>
                ))}
            </div>
        </div>
    );
};
