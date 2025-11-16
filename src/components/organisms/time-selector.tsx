import React from 'react';
import { Heading } from '@components/atoms/heading';
import { SelectorChip } from '@components/atoms/selector-chip';

interface TimeSelectorProps {
    times: { id: number; time: string }[];
    selectedTimeId: number;
    onSelectTime: (timeId: number) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
    times,
    selectedTimeId,
    onSelectTime,
}) => {
    return (
        <div className="flex flex-col space-y-[37px]">
            <Heading size="xl">Time</Heading>
            <div className="flex space-x-[16px]">
                {times.map((record) => (
                    <SelectorChip
                        key={record.id}
                        isSelected={selectedTimeId === record.id}
                        onClick={() => onSelectTime(record.id)}
                        className="p-[15px] rounded-[8px] h-[40px] w-[77px]"
                    >
                        <p className="text-[16px] text-center">{record.time}</p>
                    </SelectorChip>
                ))}
            </div>
        </div>
    );
};