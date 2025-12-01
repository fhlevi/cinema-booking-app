import { MainWrapper } from '@components/templates/main-wrapper';
import { StudioLists } from '@components/organisms/movie-lists';
import { Heading } from '@components/atoms/heading';
import { AuthDialog } from '@components/molecules/auth-dialog';
import React from 'react';
import { withQueryProvider } from '@providers/query-provider';
import { useStudios } from '@hooks/use-studios';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { findToken } from '@lib/cookie';

const CinamePageContent = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const { resetFilters } = useBooking();

    const { data: studios, isLoading, isError } = useStudios();

    React.useEffect(() => {
        resetFilters();
    }, [resetFilters]);

    const handleOpenChange = (id: number) => {
        const token = findToken();

        if (!token) setShowDialog(true); 
        else window.location.href = `/studio?studioId=${id}`;
    };
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching movies</div>;

    return (
        <MainWrapper>
            <section className="flex flex-col gap-8">
                <Heading size="xl" className="text-center">Now Showing</Heading>

                <StudioLists studios={studios} onOpenChange={handleOpenChange} />
                <AuthDialog open={showDialog} onOpenChange={setShowDialog} />
            </section>
        </MainWrapper>
    )
}

const CinamePageComponent = () => (
    <BookingProvider>
        <CinamePageContent />
    </BookingProvider>
);

export const CinamePage = withQueryProvider(CinamePageComponent)