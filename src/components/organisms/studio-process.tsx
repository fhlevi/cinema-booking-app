import React from 'react';
import { datesStudio, timesStudio } from '@constants/studios';
import { Button } from '@components/atoms/button';
import { Heading } from '@components/atoms/heading';
import { Text } from '@components/atoms/text';
import { formatDateLong } from '@lib/date';

interface Props {
    location: string;
    dateId: number;
    timeId: number;
    onClick: (val: string | number | null | undefined) => void;
}

export const StudioProcess = ({ location, dateId, timeId, onClick }: Props) => {
    const [studioId, setStudioId] = React.useState<string | number | null>();

    const timeSelected = timesStudio?.find((timeStd) => timeStd.id === timeId);
    const dateSelected = datesStudio?.find((dateStd) => dateStd.id === dateId);

    React.useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const queryValue = queryParams.get('studioId');
        setStudioId(queryValue);
    }, []);

    return (
        <section className="min-w-[373px] min-h-[325px] py-[43px] px-[55px] border border-white flex flex-col space-y-[31px] rounded-[20px]">
            <Heading as="p" size="lg">{location}</Heading>
            <div>
                <Heading as="p" size="md">{dateSelected ? formatDateLong(dateSelected.date) : '-'}</Heading>
                <Heading as="p" size="md">{timeSelected?.time || '-'}</Heading>
            </div>
            <Text>*Seat selection can be done after this</Text>
            <Button className="rounded-[8px]" onClick={() => onClick(studioId)}>
                Process
            </Button>
        </section>
    );
};
