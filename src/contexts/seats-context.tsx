import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Seat } from '@type/studios';

interface SeatsContextType {
    seatsId: number[];
    handleSeatClick: (seatId: number) => void;
    totalPayment: number;
    getSeatSelected: (seats: Seat[]) => string;
    resetSeats: () => void;
}

const SeatsContext = createContext<SeatsContextType | undefined>(undefined);

export const SeatsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [seatsId, setSeatsId] = useState<number[]>([]);

    useEffect(() => {
        const storedSeats = localStorage.getItem('seatsId');
        if (storedSeats) {
            setSeatsId(JSON.parse(storedSeats));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('seatsId', JSON.stringify(seatsId));
    }, [seatsId]);

    const handleSeatClick = React.useCallback((seatId: number) => {
        setSeatsId(prevSeats => {
            if (prevSeats.includes(seatId)) {
                return prevSeats.filter(id => id !== seatId);
            } else {
                return [...prevSeats, seatId];
            }
        });
    }, []);

    const resetSeats = React.useCallback(() => {
        setSeatsId([]);
        localStorage.removeItem('seatsId');
    }, []);

    const totalPayment = 35000 * seatsId.length;

    const getSeatSelected = React.useCallback((seats: Seat[]) => {
        if (!seats) return '';
        return seats
            .filter(seat => seatsId.includes(seat.id))
            .map(seat => seat.seat_number)
            .join(', ');
    }, [seatsId]);

    return (
        <SeatsContext.Provider value={{ seatsId, handleSeatClick, totalPayment, getSeatSelected, resetSeats }}>
            {children}
        </SeatsContext.Provider>
    );
};

export const useSeats = () => {
    const context = useContext(SeatsContext);
    if (context === undefined) {
        throw new Error('useSeats must be used within a SeatsProvider');
    }
    return context;
};
