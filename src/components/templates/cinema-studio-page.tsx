import { MainWrapper } from '@components/templates/main-wrapper';
import { datesStudio, locationStudio, timesStudio } from '@constants/studios';
import React, { useCallback } from 'react';
import { LocationSelector } from '@components/organisms/location-selector';
import { DateSelector } from '@components/organisms/date-selector';
import { TimeSelector } from '@components/organisms/time-selector';
import { InformationStudio } from '@components/organisms/information-studio';
import { StudioProcess } from '@components/organisms/studio-process';
import { withQueryProvider } from '@providers/query-provider';
import type { Studio } from '@type/studios';
import { imagesStudio } from '@constants/studios';
import useQueryParam from '@hooks/use-query-params';
import { useStudios } from '@hooks/use-studios';
import { BookingProvider, useBooking } from '@contexts/booking-context';

const CinemaStudioPageContent = () => {
    const {
        bookingInfo,
        setLocation,
        setDate,
        setTime,
        resetSeats,
    } = useBooking();
    
    const studioId = useQueryParam('studioId');
    
    const { data: studios = [], isLoading, isError } = useStudios();

    const handleProcessed = useCallback((studioId: string|number|null|undefined) => {
        window.location.href = `/seats?studioId=${studioId}`
    }, [])

    React.useEffect(() => {
        resetSeats();
    }, [resetSeats])

    const studioSelected = studios?.find((studio) => studio.id === Number(studioId)) as Studio;
    const indexImage = studios.findIndex((studio) => studio.id === Number(studioId)) as number;

    const studioImage = imagesStudio[indexImage] as string;

    return (
        <MainWrapper>
            <section className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-[100px]">
                    <LocationSelector
                        locations={locationStudio}
                        selectedLocation={bookingInfo.location}
                        onSelectLocation={setLocation}
                    />
                    <DateSelector
                        dates={datesStudio}
                        selectedDateId={bookingInfo.date}
                        onSelectDate={setDate}
                    />
                    <TimeSelector
                        times={timesStudio}
                        selectedTimeId={bookingInfo.time}
                        onSelectTime={setTime}
                    />
                </div>
                <div className='flex flex-col items-end justify-start space-y-[76px]'>
                    <InformationStudio studioImage={studioImage} studioName={studioSelected?.name} />
                    <StudioProcess location={bookingInfo.location} dateId={bookingInfo.date} timeId={bookingInfo.time} onClick={handleProcessed} />
                </div>
            </section>
        </MainWrapper>
    );
}

const CinemaStudioPageComponent = () => (
    <BookingProvider>
        <CinemaStudioPageContent />
    </BookingProvider>
);

export const CinemaStudioPage = withQueryProvider(CinemaStudioPageComponent);