import React from 'react'
import { Wrapper } from '@components/templates/wrapper';
import { Header } from '@components/organisms/header'

interface Props {
    children?: React.ReactNode;
    section?: string;
}

export const MainWrapper = ({ children, section = 'main' }: Props) => {
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

    return (
        <Wrapper className="w-full">
            {!pathname?.includes('seats') && <Header />}
            <div className='relative max-w-[1224px] mx-auto px-[15px] py-[112px] min-h-dvh'>
                {children}
            </div>
        </Wrapper>
    )
}