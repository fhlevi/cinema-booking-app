import React from 'react';
import { cn } from '@lib/cn';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: HeadingTag;
    size?: HeadingSize;
}

export const Heading: React.FC<HeadingProps> = ({
    as: Tag = 'h1',
    size = 'xl',
    className,
    children,
    ...props
}) => {
    const sizeClasses: Record<HeadingSize, string> = {
        xl: 'text-[46px] font-bold',
        lg: 'text-[32px]',
        md: 'text-[22px]',
        sm: 'text-lg',
    };

    return (
        <Tag className={cn('text-white', sizeClasses[size], className)} {...props}>
            {children}
        </Tag>
    );
};
