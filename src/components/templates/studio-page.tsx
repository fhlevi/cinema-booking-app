import { MainWrapper } from '@components/organisms/main-wrapper';
import { datesStudio, locationStudio, timesStudio } from '@constants/studios';
import { cn } from '@lib/cn';
import { MapPin } from 'lucide-react';
import React, { useCallback } from 'react';

export const StudioPage = () => {
    const [locationSelected, setLocationSelected] = React.useState<string>('Bogor');
    const [dateIdSelected, setDateIdSelected] = React.useState<number>(1);
    const [timeIdSelected, setTimeIdSelected] = React.useState<number>(1);

    const handleSetLocation = useCallback((val: string) => {
        setLocationSelected(val)
    }, [locationSelected]);

    const handleDateStudio = useCallback((dateId: number) => {
        setDateIdSelected(dateId)
    }, [dateIdSelected]);

    const handleTimeStudio = useCallback((timeId: number) => {
        setTimeIdSelected(timeId)
    }, [timeIdSelected]);

    return (
        <MainWrapper>
            <section className="grid grid-cols-2 gap-8">
                <div className='flex flex-col gap-[100px]'>
                    <div className='flex flex-col space-y-[37px]'>
                        <h1 className="text-[46px] font-bold text-white">Theater</h1>

                        <div className='flex space-x-[16px]'>
                            {locationStudio.map((text, i) => (
                                <div  key={i} className={cn(
                                    'flex gap-[14px] bg-transparent py-[9px] px-[15px] text-white rounded-[39px] h-[46px] w-[130px] items-center cursor-pointer',
                                    locationSelected === text && 'bg-[#1DE782]',
                                    locationSelected !== text && 'border border-white'
                                )}
                                onClick={() => handleSetLocation(text)}>
                                    <MapPin size={28} />
                                    <p className='text-[20px]'>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col space-y-[37px]'>
                        <h1 className="text-[46px] font-bold text-white">Date</h1>

                        <div className='flex space-x-[16px]'>
                            {datesStudio.map((record) => (
                                <div className={cn(
                                    'flex gap-[14px] bg-transparent py-[15px] px-[15px] text-white rounded-[8px] h-[85px] w-[85px] items-center cursor-pointer',
                                    dateIdSelected === record.id && 'bg-[#1DE782]',
                                    dateIdSelected !== record.id && 'border border-white'
                                )}
                                onClick={() => handleDateStudio(record.id)}>
                                    <p className='text-[16px] text-center'>{record.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col space-y-[37px]'>
                        <h1 className="text-[46px] font-bold text-white">Time</h1>
                        
                        <div className='flex space-x-[16px]'>
                            {timesStudio.map((record) => (
                                <div className={cn(
                                    'flex gap-[14px] bg-transparent py-[15px] px-[15px] text-white rounded-[8px] h-[40px] w-[77px] items-center cursor-pointer',
                                    timeIdSelected === record.id && 'bg-[#1DE782]',
                                    timeIdSelected !== record.id && 'border border-white'
                                )}
                                onClick={() => handleTimeStudio(record.id)}>
                                    <p className='text-[16px] text-center'>{record.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </MainWrapper>
    )
}
