import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@lib/cn';

interface LocationChipProps {
    location: string;
    isSelected: boolean;
    onClick: (location: string) => void;
}

export const LocationChip: React.FC<LocationChipProps> = ({ location, isSelected, onClick }) => {
    return (
        <div
            className={cn(
                'flex gap-[14px] bg-transparent py-[9px] px-[15px] text-white rounded-[39px] h-[46px] w-[130px] items-center cursor-pointer',
                isSelected ? 'bg-[#1DE782]' : 'border border-white',
            )}
            onClick={() => onClick(location)}
        >
            <MapPin size={28} />
            <p className="text-[20px]">{location}</p>
        </div>
    );
};
