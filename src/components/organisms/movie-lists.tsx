import { MovieCard } from '@components/molecules/movie-card';
import { imagesStudio } from '@constants/studios';
import type { Studio } from '@type/studios';
import { findToken } from '@lib/cookie';

interface Props {
    studios: Studio[] | undefined
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const StudioLists = ({ studios, onOpenChange }: Props) => {
    const handleClickCard = (id: number) => {
        const token = findToken();
        if (!token) onOpenChange(true); 
        else window.location.href = `/studio?studioId=${id}`;
    };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] items-center content-center">
            {studios?.map((studio, index) => (
                <MovieCard
                    key={studio.id}
                    id={studio.id}
                    name={studio.name}
                    image={imagesStudio[index]}
                    onClick={handleClickCard}
                />
            ))}
        </section>
    );
};
