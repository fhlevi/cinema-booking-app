import React from 'react';
import { timesStudio } from '@constants/studios';
import { Button } from '@components/atoms/button';
import { Heading } from '@components/atoms/heading';
import { Text } from '@components/atoms/text';

interface Props {
    location: string;
    dateId: number;
    timeId: number;
    onClick: (val: string | number | null | undefined) => void;
}

export const StudioProcess = ({ location, dateId, timeId, onClick }: Props) => {
    const [studioId, setStudioId] = React.useState<string | number | null>();

    const timeSelected = timesStudio?.find((timeStd) => timeStd.id === timeId);

    React.useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const queryValue = queryParams.get('studioId');
        setStudioId(queryValue);
    }, []);

    return (
        <section className="w-[373px] min-h-[325px] py-[43px] px-[55px] border border-white flex flex-col space-y-[31px] rounded-[20px]">
            <Heading as="p" size="lg">{location}</Heading>
            <div>
                <Heading as="p" size="md">28 October 2023</Heading>
                <Heading as="p" size="md">{timeSelected?.time || '-'}</Heading>
            </div>
            <Text>*Seat selection can be done after this</Text>
            <Button className="rounded-[8px]" onClick={() => onClick(studioId)}>
                Process
            </Button>
        </section>
    );
};
