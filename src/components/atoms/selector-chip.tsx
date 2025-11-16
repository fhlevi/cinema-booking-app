import React from 'react';
import { cn } from '@lib/cn';

interface SelectorChipProps extends React.HTMLAttributes<HTMLDivElement> {
    isSelected: boolean;
}

export const SelectorChip: React.FC<SelectorChipProps> = ({
    isSelected,
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex bg-transparent text-white items-center justify-center cursor-pointer',
                isSelected ? 'bg-[#1DE782]' : 'border border-white',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
};
