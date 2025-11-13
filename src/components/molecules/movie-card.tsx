import React, { useCallback } from 'react'
import { Card } from '@components/atoms/card'
import type { Studio } from '@type/studios'

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
        <section
            className="flex flex-col gap-[10px] text-[14px] font-regular"
            onClick={handleClick}
        >
            <Card className="h-[411px] block rounded-[20px] cursor-pointer" boxShadow>
                <img src={image} alt={name} className="cover rounded-[20px] h-full" />
            </Card>

            {name && <p className='text-center font-semibold text-white text-[20px]'>{name}</p>}
        </section>
    );
};