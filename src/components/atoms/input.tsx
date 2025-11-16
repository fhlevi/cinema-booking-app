import React from 'react';
import { cn } from '@lib/cn';

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(
                'flex h-[48px] w-full rounded-md border border-[#BEBEBF] bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#BEBEBF] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
