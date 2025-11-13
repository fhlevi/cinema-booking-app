import React from 'react'
import { QueryProvider } from '@components/molecules/query-provider';
import { Wrapper } from '@components/atoms/wrapper';
import { Header } from '@components/molecules/header'

interface Props {
    children?: React.ReactNode
}

export const MainWrapper = ({
    children
}: Props) => {
    return (
        <QueryProvider>
            <Wrapper styles="w-full">
                <Header />
                <section className='max-w-[1224px] mx-auto px-[15px] pt-[112px]'>
                    {children}
                </section>
            </Wrapper>
        </QueryProvider>
    )
}