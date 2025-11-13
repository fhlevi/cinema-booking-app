import React from 'react'
import { Wrapper } from '@components/atoms/wrapper'

interface Props {
    children?: React.ReactNode
}

export const AuthWrapper = (props: Props) => {
    return (
        <Wrapper styles="flex justify-center items-center">
            <div className="w-full max-w-[688px] mx-auto pt-20 px-4">
                {props.children}
            </div>
        </Wrapper>
    )
}