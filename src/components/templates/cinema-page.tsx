import { MainWrapper } from '@components/templates/main-wrapper';
import { StudioLists } from '@components/organisms/movie-lists';
import { Heading } from '@components/atoms/heading';
import { AuthDialog } from '@components/molecules/auth-dialog';
import { useQuery } from 'react-query';
import React from 'react';
import type { Studio } from '@type/studios';
import { getStudios } from '@services/studio';
import { withQueryProvider } from '@providers/query-provider';

const CinamePageComponent = () => {
    const [showDialog, setShowDialog] = React.useState(false);

    const { data: studios, isLoading, isError } = useQuery<Studio[]>({
        queryKey: 'studios',
        queryFn: getStudios
    });
    
    if (isLoading) return <div>Loading...</div>;
    
    if (isError) return <div>Error fetching movies</div>;

    return (
        <MainWrapper>
            <section className="flex flex-col gap-8">
                <Heading size="xl" className="text-center">Now Showing</Heading>

                <StudioLists studios={studios} onOpenChange={setShowDialog} />
                <AuthDialog open={showDialog} onOpenChange={setShowDialog} />
            </section>
        </MainWrapper>
    )
}

export const CinamePage = withQueryProvider(CinamePageComponent)