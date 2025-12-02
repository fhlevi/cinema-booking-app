import React from 'react';
import { cn } from '@lib/cn';

interface SeatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    seatNumber: string;
    active: boolean;
    disabled: boolean;
}

export const SeatBox: React.FC<SeatBoxProps> = ({ 
    seatNumber, 
    className, 
    active = false,
    disabled = false,
    ...props 
}) => {
    return (
        <div
            className={cn(
                'py-[8px] px-[4px] rounded-[6px]  text-center font-semibold text-[12px]',
                {
                    'bg-white text-black cursor-pointer': !active,
                    'bg-[#1DE782] text-white cursor-pointer': active,
                    'bg-gray-400 cursor-not-allowed': !disabled
                },
                className,
            )}
            {...props}
        >
            {seatNumber}
        </div>
    );
};
