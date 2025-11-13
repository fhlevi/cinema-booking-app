import React from 'react'
import styled from '@emotion/styled';
import { cn } from '@lib/cn';

interface Props {
    children?: React.ReactNode
    styles?: string
}

const Primitive = styled.section`
    height: 100vh;
    // background: radial-gradient(ellipse at 100% 10%, #006233 0%, #000 40%);
    background: 
        radial-gradient(circle 50rem at 95% 10%, #006233, transparent),
        radial-gradient(circle 50rem at 0% 95%, #006233, transparent),
        #000;
`;

export const Wrapper = (props: Props) => {
    return (
        <Primitive>
            <div className={cn("h-full", props.styles)}>
                {props.children}
            </div>
        </Primitive>
    )
}