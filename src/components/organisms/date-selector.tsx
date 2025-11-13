import React from 'react';
import { cn } from '@lib/cn';

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
            <h1 className="text-[46px] font-bold text-white">Date</h1>
            <div className="flex space-x-[16px]">
                {dates.map((record) => (
                    <div
                        key={record.id}
                        className={cn(
                            'flex gap-[14px] bg-transparent py-[15px] px-[15px] text-white rounded-[8px] h-[85px] w-[85px] items-center cursor-pointer',
                            selectedDateId === record.id && 'bg-[#1DE782]',
                            selectedDateId !== record.id && 'border border-white',
                        )}
                        onClick={() => onSelectDate(record.id)}
                    >
                        <p className="text-[16px] text-center">{record.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
