import React, { createContext, useContext } from 'react';
import useLocalStorage from '@hooks/use-local-storage';

interface StudioFiltersContextType {
    locationSelected: string;
    setLocationSelected: (location: string) => void;
    dateIdSelected: number;
    setDateIdSelected: (dateId: number) => void;
    timeIdSelected: number;
    setTimeIdSelected: (timeId: number) => void;
    resetFilters: () => void;
}

const StudioFiltersContext = createContext<StudioFiltersContextType | undefined>(undefined);

export const StudioFiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locationSelected, setLocationSelected] = useLocalStorage<string>('location', 'Bogor');
    const [dateIdSelected, setDateIdSelected] = useLocalStorage<number>('date', 1);
    const [timeIdSelected, setTimeIdSelected] = useLocalStorage<number>('time', 1);

    const resetFilters = () => {
        setLocationSelected('Bogor');
        setDateIdSelected(1);
        setTimeIdSelected(1);
    };

    return (
        <StudioFiltersContext.Provider value={{
            locationSelected,
            setLocationSelected,
            dateIdSelected,
            setDateIdSelected,
            timeIdSelected,
            setTimeIdSelected,
            resetFilters
        }}>
            {children}
        </StudioFiltersContext.Provider>
    );
};

export const useStudioFilters = () => {
    const context = useContext(StudioFiltersContext);
    if (context === undefined) {
        throw new Error('useStudioFilters must be used within a StudioFiltersProvider');
    }
    return context;
};
