import React from 'react';
import { cn } from '@lib/cn';

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
            <h1 className="text-[46px] font-bold text-white">Time</h1>
            <div className="flex space-x-[16px]">
                {times.map((record) => (
                    <div
                        key={record.id}
                        className={cn(
                            'flex gap-[14px] bg-transparent py-[15px] px-[15px] text-white rounded-[8px] h-[40px] w-[77px] items-center cursor-pointer',
                            selectedTimeId === record.id && 'bg-[#1DE782]',
                            selectedTimeId !== record.id && 'border border-white',
                        )}
                        onClick={() => onSelectTime(record.id)}
                    >
                        <p className="text-[16px] text-center">{record.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
