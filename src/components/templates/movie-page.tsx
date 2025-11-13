import { MainWrapper } from '@components/organisms/main-wrapper';
import { StudioLists } from '@components/organisms/studio-lists';

export const MoviePage = () => {
    return (
        <MainWrapper>
            <section className="flex flex-col gap-8">
                <h1 className="text-[46px] font-bold text-white text-center">Now Showing</h1>

                <StudioLists />
            </section>
        </MainWrapper>
    )
}
