import { MainWrapper } from '@components/molecules/main-wrapper';
import { datesStudio, locationStudio, timesStudio } from '@constants/studios';
import React, { useCallback } from 'react';
import { LocationSelector } from '@components/organisms/location-selector';
import { DateSelector } from '@components/organisms/date-selector';
import { TimeSelector } from '@components/organisms/time-selector';
import { InformationStudio } from '@components/organisms/information-studio';
import { StudioProcess } from '@components/organisms/studio-process';

export const StudioPage = () => {
    const [locationSelected, setLocationSelected] = React.useState<string>('Bogor');
    const [dateIdSelected, setDateIdSelected] = React.useState<number>(1);
    const [timeIdSelected, setTimeIdSelected] = React.useState<number>(1);

    const handleSetLocation = useCallback((val: string) => {
        setLocationSelected(val);
    }, []);

    const handleDateStudio = useCallback((dateId: number) => {
        setDateIdSelected(dateId);
    }, []);

    const handleTimeStudio = useCallback((timeId: number) => {
        setTimeIdSelected(timeId);
    }, []);

    const handleProcessed = useCallback((studioId: string|number|null|undefined) => {
        window.location.href = `/seats?studioId=${studioId}`
    }, [])

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
                    <InformationStudio />
                    <StudioProcess location={locationSelected} dateId={dateIdSelected} timeId={timeIdSelected} onClick={handleProcessed} />
                </div>
            </section>
        </MainWrapper>
    );
};