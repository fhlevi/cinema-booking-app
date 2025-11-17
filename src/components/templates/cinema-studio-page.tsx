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
import { SeatsProvider, useSeats } from '@contexts/seats-context';
import useQueryParam from '@hooks/use-query-params';
import { useStudios } from '@hooks/use-studios';
import { StudioFiltersProvider, useStudioFilters } from '@contexts/studio-filters-context';

const CinemaStudioPageContent = () => {
    const {
        locationSelected,
        setLocationSelected,
        dateIdSelected,
        setDateIdSelected,
        timeIdSelected,
        setTimeIdSelected
    } = useStudioFilters();
    
    const studioId = useQueryParam('studioId');
    const { resetSeats } = useSeats();

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
                        selectedLocation={locationSelected}
                        onSelectLocation={setLocationSelected}
                    />
                    <DateSelector
                        dates={datesStudio}
                        selectedDateId={dateIdSelected}
                        onSelectDate={setDateIdSelected}
                    />
                    <TimeSelector
                        times={timesStudio}
                        selectedTimeId={timeIdSelected}
                        onSelectTime={setTimeIdSelected}
                    />
                </div>
                <div className='flex flex-col items-end justify-start space-y-[76px]'>
                    <InformationStudio studioImage={studioImage} studioName={studioSelected?.name} />
                    <StudioProcess location={locationSelected} dateId={dateIdSelected} timeId={timeIdSelected} onClick={handleProcessed} />
                </div>
            </section>
        </MainWrapper>
    );
}

const CinemaStudioPageComponent = () => (
    <SeatsProvider>
        <StudioFiltersProvider>
            <CinemaStudioPageContent />
        </StudioFiltersProvider>
    </SeatsProvider>
);

export const CinemaStudioPage = withQueryProvider(CinemaStudioPageComponent);