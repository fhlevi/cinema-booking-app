import React from 'react';
import { cn } from '@lib/cn';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    outline?: boolean;
    danger?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, outline, danger, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'text-white py-[10px] px-[16px] text-base cursor-pointer transition-colors duration-300 ease-in-out',
                    'hover:opacity-90',
                    'disabled:bg-[#727272] disabled:cursor-not-allowed',
                    {
                        'bg-[#1DE782]': !outline && !danger,
                        'border border-white bg-transparent': outline,
                        'bg-[#DC0000]': danger,
                    },
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';
