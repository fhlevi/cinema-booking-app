import React from 'react'
import styled from '@emotion/styled';
import { cn } from '@lib/cn';

interface Props {
    children?: React.ReactNode
    background?: string;
    boxShadow?: boolean;
    className?: string;
}

const CardPrimitive = styled.div<{ 
    background?: string;
    boxShadow?: boolean;
}>`
    position: relative;
    background: ${props => props.background || 'hsla(0,0%,100%,.6)'};

    ${props => props.boxShadow && `
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    `}
`;

export const Card = ({
    children,
    background,
    boxShadow,
    className,
}: Props) => {
    return (
        <CardPrimitive 
            background={background}
            boxShadow={boxShadow}
            className={cn(className)}
        >
            {children}
        </CardPrimitive>
    )
}