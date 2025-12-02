import React, { useCallback } from 'react'
import { Card } from '@components/atoms/card'
import type { Studio } from '@type/studios'
import { Text } from '@components/atoms/text';

interface Props extends Pick<Studio, 'name' | 'id'> {
    image?: string;
    onClick?: (id: number) => void;
}

export const MovieCard = ({
    id,
    name,
    image,
    onClick
}: Props) => {
    const handleClick = useCallback(() => onClick && onClick(id || 1), [id]);

    return (
        <section className="flex flex-col gap-[10px] text-[14px] font-regular" onClick={handleClick}>
            <Card className="min-h-[411px] block rounded-[20px] cursor-pointer" boxShadow>
                <img src={image} alt={name} className="cover rounded-[20px] min-h-[375px] w-full" />
            </Card>

            {name && <Text className='text-center font-semibold text-[20px]'>{name}</Text>}
        </section>
    );
};