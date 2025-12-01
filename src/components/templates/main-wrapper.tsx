import React from 'react'
import { Wrapper } from '@components/templates/wrapper';
import { Header } from '@components/organisms/header'
import { cn } from '@lib/cn';

interface Props {
    children?: React.ReactNode;
    section?: string;
    contentClassName?: string;
}

export const MainWrapper = ({ children, section = 'main', contentClassName }: Props) => {
    const [pathname, setPathname] = React.useState<string | null>(null);

    React.useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    if (section === 'auth') {
        return (
            <Wrapper className="flex justify-center items-center">
                <div className="w-full max-w-[688px] mx-auto pt-20 px-4">
                    {children}
                </div>
            </Wrapper>
        )
    }

    const isHeader = !pathname?.includes('seats') && !pathname?.includes('order')

    return (
        <Wrapper className="w-full">
            {isHeader && <Header />}
            <div className={cn('relative max-w-[1224px] mx-auto px-[15px] py-[112px] min-h-dvh', contentClassName)}>
                {children}
            </div>
        </Wrapper>
    )
}