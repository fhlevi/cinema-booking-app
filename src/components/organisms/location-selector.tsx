import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@lib/cn';

interface LocationSelectorProps {
    locations: string[];
    selectedLocation: string;
    onSelectLocation: (location: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
    locations,
    selectedLocation,
    onSelectLocation,
}) => {
    return (
        <div className="flex flex-col space-y-[37px]">
            <h1 className="text-[46px] font-bold text-white">Theater</h1>
            <div className="flex space-x-[16px]">
                {locations.map((text, i) => (
                    <div
                        key={i}
                        className={cn(
                            'flex gap-[14px] bg-transparent py-[9px] px-[15px] text-white rounded-[39px] h-[46px] w-[130px] items-center cursor-pointer',
                            selectedLocation === text && 'bg-[#1DE782]',
                            selectedLocation !== text && 'border border-white',
                        )}
                        onClick={() => onSelectLocation(text)}
                    >
                        <MapPin size={28} />
                        <p className="text-[20px]">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
