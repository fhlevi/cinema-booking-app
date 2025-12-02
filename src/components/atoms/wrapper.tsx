import React from 'react';
import { cn } from '@lib/cn';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

export const Wrapper = (props: Props) => {
    const backgroundStyle = {
        background: `
            radial-gradient(circle 50rem at 95% 10%, #006233, transparent),
            radial-gradient(circle 50rem at 0% 95%, #006233, transparent),
            #000
        `,
    };

    return (
        <section
            className={cn("h-full min-h-dvh", props.className)}
            style={backgroundStyle}
        >
            {props.children}
        </section>
    );
};
