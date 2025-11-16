import React from 'react';
import { cn } from '@lib/cn';

interface ScreenBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ScreenBar: React.FC<ScreenBarProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn(
                'h-[42px] bg-white rounded-full text-black text-center font-semibold py-2',
                className,
            )}
            {...props}
        >
            Screen
        </div>
    );
};
