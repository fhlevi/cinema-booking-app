import { MainWrapper } from '@components/layouts/main-wrapper';
import { StudioLists } from '@components/organisms/movie-lists';
import { Heading } from '@components/atoms/heading';
import { AuthDialog } from '@components/molecules/auth-dialog';
import React from 'react';
import { withQueryProvider } from '@providers/query-provider';
import { useStudios } from '@hooks/use-studios';
import { BookingProvider, useBooking } from '@contexts/booking-context';
import { findToken } from '@lib/cookie';
import type { Studio } from '@type/studios';

const CinamePageContent = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const { resetFilters, setStudioId, setStudioDetails } = useBooking();

    const { data: studios, isLoading, isError } = useStudios();

    React.useEffect(() => {
        resetFilters();
        setStudioId('');
    }, [resetFilters]);

    const handleOpenChange = (studio: Studio, image: string) => {
        const token = findToken();

        if (!token) {
            setShowDialog(true);
            return;
        }

        setStudioId(String(studio.id));
        setStudioDetails(studio.name, image);
        window.location.href = '/studio';
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

export const CinamePage = withQueryProvider(CinamePageComponent);