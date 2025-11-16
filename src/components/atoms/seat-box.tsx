import React from 'react';
import { cn } from '@lib/cn';

interface SeatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    seatNumber: string;
    active: boolean
}

export const SeatBox: React.FC<SeatBoxProps> = ({ 
    seatNumber, 
    className, 
    active = false,
    ...props 
}) => {
    return (
        <div
            className={cn(
                'py-[8px] px-[4px] rounded-[6px]  text-center font-semibold text-[12px]',
                {
                    'bg-white text-black': !active,
                    'bg-[#1DE782] text-white': active,
                },
                className,
            )}
            {...props}
        >
            {seatNumber}
        </div>
    );
};
