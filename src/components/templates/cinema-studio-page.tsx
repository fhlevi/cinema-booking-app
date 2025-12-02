import { MainWrapper } from '@components/layouts/main-wrapper';
import { datesStudio, locationStudio, timesStudio, imagesStudio } from '@constants/studios';
import { useCallback, useEffect } from 'react';
import { LocationSelector } from '@components/organisms/location-selector';
import { DateSelector } from '@components/organisms/date-selector';
import { TimeSelector } from '@components/organisms/time-selector';
import { InformationStudio } from '@components/organisms/information-studio';
import { StudioProcess } from '@components/organisms/studio-process';
import { withQueryProvider } from '@providers/query-provider';
import { BookingProvider, useBooking } from '@contexts/booking-context';

const CinemaStudioPageContent = () => {
    const {
        bookingInfo,
        setLocation,
        setDate,
        setTime,
        resetSeats,
    } = useBooking();

    const handleProcessed = useCallback(() => {
        window.location.href = `/seats`;
    }, []);

    useEffect(() => {
        resetSeats();
    }, [resetSeats]);

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
                    <InformationStudio 
                        studioImage={bookingInfo.studioImage} 
                        studioName={bookingInfo.studioName} 
                    />
                    <StudioProcess 
                        location={bookingInfo.location} 
                        dateId={bookingInfo.date} 
                        timeId={bookingInfo.time} 
                        onClick={handleProcessed} 
                    />
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