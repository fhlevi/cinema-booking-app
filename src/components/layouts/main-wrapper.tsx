import React from 'react'
import { Wrapper } from '@components/atoms/wrapper';
import { Header } from '@components/organisms/header'
import { cn } from '@lib/cn';

interface Props {
    children?: React.ReactNode;
    section?: string;
    contentClassName?: string;
}

const headerNotAllowed = ['seats', 'order', 'checkout'];

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

    const isHeader = !headerNotAllowed.some((path) => pathname?.includes(path));

    return (
        <Wrapper className="w-full">
            {isHeader && <Header />}
            <div className={cn('relative max-w-[1424px] mx-auto px-[15px] py-[112px] h-full', contentClassName)}>
                {children}
            </div>
        </Wrapper>
    )
}