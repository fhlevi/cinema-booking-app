import React from 'react';
import { cn } from '@lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    background?: string;
    boxShadow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, background, boxShadow, style, ...props }, ref) => {
        const cardStyle = background ? { ...style, background } : style;

        return (
            <div
                ref={ref}
                className={cn(
                    'relative',
                    {
                        'bg-white/60': !background,
                        'shadow-[0_1px_4px_rgba(0,0,0,0.16)]': boxShadow,
                    },
                    className,
                )}
                style={cardStyle}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = 'Card';
