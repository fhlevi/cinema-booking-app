import React from 'react';
import { cn } from '@lib/cn';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Text: React.FC<TextProps> = ({ className, children, ...props }) => {
    return (
        <p className={cn('text-white', className)} {...props}>
            {children}
        </p>
    );
};
