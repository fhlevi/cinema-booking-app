import { MovieCard } from '@components/molecules/movie-card';
import { imagesStudio } from '@constants/studios';
import type { Studio } from '@type/studios';

interface Props {
    studios: Studio[] | undefined;
    onOpenChange: (studio: Studio, image: string) => void;
}

export const StudioLists = ({ studios, onOpenChange }: Props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] items-center content-center">
            {studios?.map((studio, index) => (
                <div key={studio.id} onClick={() => onOpenChange(studio, imagesStudio[index])} className="cursor-pointer">
                    <MovieCard
                        id={studio.id}
                        name={studio.name}
                        image={imagesStudio[index]}
                    />
                </div>
            ))}
        </section>
    );
};
