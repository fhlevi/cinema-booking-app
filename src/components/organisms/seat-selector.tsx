import { getSeats } from '@services/studio';
import type { Studio } from '@type/studios';
import React from 'react'
import { useQuery } from 'react-query';

interface Props {}

export const SeatSelector = ({

}: Props) => {
    const [studioId, setStudioId] = React.useState<string|number|null>();

    const { data: seats, isLoading, isError } = useQuery<Studio[]>(
        ['seats', { id: studioId }], 
        getSeats,
        {
            enabled: !!studioId
        }
    );
    
    React.useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const queryValue = queryParams.get('studioId')
        setStudioId(queryValue)
    }, [])

    return (
        <section className='w-[508px] mx-auto space-y-8'>
            <div className='grid grid-cols-10 gap-2'>
                {seats?.map((seatVal) => (
                    <div key={seatVal.id} className='bg-white py-[8px] px-[4px] rounded-[6px] text-black text-center font-semibold text-[12px]'>{seatVal?.seat_number}</div>
                ))}
            </div>
            <div className='h-[42px] bg-white rounded-full text-black text-center font-semibold py-2'>Screen</div>
        </section>
    )
}