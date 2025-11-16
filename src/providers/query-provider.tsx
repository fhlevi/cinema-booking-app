import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

export const withQueryProvider = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    const WithQueryProvider: React.FC<P> = (props) => {
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
                <WrappedComponent {...props} />
            </QueryClientProvider>
        )
    }
    return WithQueryProvider
}
