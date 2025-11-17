import { MainWrapper } from '@components/templates/main-wrapper';
import { StudioLists } from '@components/organisms/movie-lists';
import { Heading } from '@components/atoms/heading';
import { AuthDialog } from '@components/molecules/auth-dialog';
import React from 'react';
import { withQueryProvider } from '@providers/query-provider';
import { useStudios } from '@hooks/use-studios';
import { StudioFiltersProvider, useStudioFilters } from '@contexts/studio-filters-context';

const CinamePageContent = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const { resetFilters } = useStudioFilters();

    const { data: studios, isLoading, isError } = useStudios();

    React.useEffect(() => {
        resetFilters();
    }, [resetFilters]);
    
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

const CinamePageComponent = () => (
    <StudioFiltersProvider>
        <CinamePageContent />
    </StudioFiltersProvider>
);

export const CinamePage = withQueryProvider(CinamePageComponent)