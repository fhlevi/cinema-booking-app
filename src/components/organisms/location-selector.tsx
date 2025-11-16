import React from 'react';
import { Heading } from '@components/atoms/heading';
import { LocationChip } from '@components/molecules/location-chip';

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
            <Heading size="xl">Theater</Heading>
            <div className="flex space-x-[16px]">
                {locations.map((location, i) => (
                    <LocationChip
                        key={i}
                        location={location}
                        isSelected={selectedLocation === location}
                        onClick={onSelectLocation}
                    />
                ))}
            </div>
        </div>
    );
};