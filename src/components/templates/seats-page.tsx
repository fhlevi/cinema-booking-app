import { MainWrapper } from '@components/molecules/main-wrapper';
import { SeatSelector } from '@components/organisms/seat-selector';

export const SeatsPage = () => {
    return (
        <MainWrapper>
            <section className="flex flex-col gap-8 text-white">
                <h1 className="text-4xl font-bold">Seats</h1>

                <SeatSelector />
            </section>
        </MainWrapper>
    )
}
