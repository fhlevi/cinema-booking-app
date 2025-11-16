import { MainWrapper } from '@components/templates/main-wrapper';
import { datesStudio, locationStudio, timesStudio } from '@constants/studios';
import React, { useCallback } from 'react';
import { LocationSelector } from '@components/organisms/location-selector';
import { DateSelector } from '@components/organisms/date-selector';
import { TimeSelector } from '@components/organisms/time-selector';
import { InformationStudio } from '@components/organisms/information-studio';
import { StudioProcess } from '@components/organisms/studio-process';
import { withQueryProvider } from '@providers/query-provider';
import { getStudios } from '@services/studio';
import { useQuery } from 'react-query';
import type { Studio } from '@type/studios';
import { imagesStudio } from '@constants/studios';
import { SeatsProvider, useSeats } from '@contexts/seats-context';
import useLocalStorage from '@hooks/use-local-storage';
import useQueryParam from '@hooks/use-query-params';

const CinemaStudioPageContent = () => {
    const [locationSelected, setLocationSelected] = useLocalStorage<string>('location', 'Bogor');
    const [dateIdSelected, setDateIdSelected] = useLocalStorage<number>('date', 1);
    const [timeIdSelected, setTimeIdSelected] = useLocalStorage<number>('time', 1);
    const studioId = useQueryParam('studioId');
    const { resetSeats } = useSeats();

    const { data: studios = [], isLoading, isError } = useQuery<Studio[]>({
        queryKey: 'studios',
        queryFn: getStudios
    });

    const handleSetLocation = useCallback((val: string) => {
        setLocationSelected(val);
    }, [setLocationSelected]);

    const handleDateStudio = useCallback((dateId: number) => {
        setDateIdSelected(dateId);
    }, [setDateIdSelected]);

    const handleTimeStudio = useCallback((timeId: number) => {
        setTimeIdSelected(timeId);
    }, [setTimeIdSelected]);

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
                        onSelectLocation={handleSetLocation}
                    />
                    <DateSelector
                        dates={datesStudio}
                        selectedDateId={dateIdSelected}
                        onSelectDate={handleDateStudio}
                    />
                    <TimeSelector
                        times={timesStudio}
                        selectedTimeId={timeIdSelected}
                        onSelectTime={handleTimeStudio}
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
        <CinemaStudioPageContent />
    </SeatsProvider>
);

export const CinemaStudioPage = withQueryProvider(CinemaStudioPageComponent);