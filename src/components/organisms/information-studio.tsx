import React from 'react'
import { getStudios } from '@services/studio';
import { useQuery } from 'react-query';
import type { Studio } from '@type/studios';
import { MovieCard } from '@components/molecules/movie-card';
import { imagesStudio } from '@constants/studios';

export const InformationStudio = () => {
    const { data: studios, isLoading, isError } = useQuery<Studio[]>(
        'studios', 
        getStudios
    );

    const [studioId, setStudioId] = React.useState<string|number|null>();

    React.useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const queryValue = queryParams.get('studioId')
        setStudioId(queryValue)
    }, [])

    const studioSelected = studios?.find((studio) => studio.id === Number(studioId));
    const indexImage = studios?.findIndex((studio) => studio.id === Number(studioId));

    return (
        <section className='h-auto flex flex-col space-y-[35px] w-[250px]'>
            <MovieCard 
                image={imagesStudio[indexImage || 0]}
            />
            <div className='flex flex-col space-y-[18px] text-sm text-white'>
                <p className='text-[24px]'>{studioSelected?.name}</p>
                <p>Movie description here...</p>

                <section className='grid grid-cols-2'>
                    <p>Duration</p>
                    <p>1h 58m</p>
                </section>

                <section className='grid grid-cols-2'>
                    <p>Type</p>
                    <p>Action</p>
                </section>
            </div>
        </section>
    )
}