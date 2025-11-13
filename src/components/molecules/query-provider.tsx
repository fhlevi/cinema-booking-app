import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

interface Props {
    children?: React.ReactNode
}

export const QueryProvider = ({
    children
}: Props) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    });


    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}