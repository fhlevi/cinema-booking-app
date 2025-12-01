import React, { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '@hooks/use-local-storage';
import type { Seat } from '@type/studios';

interface BookingInfo {
    location: string;
    date: number;
    time: number;
    seatsId: number[];
    studioId: string;
    studioName: string;
    studioImage: string;
    seatNumbers: string;
}

interface BookingContextType {
    bookingInfo: BookingInfo;
    setLocation: (location: string) => void;
    setDate: (dateId: number) => void;
    setTime: (timeId: number) => void;
    handleSeatClick: (seatId: number) => void;
    setStudioId: (studioId: string) => void;
    setStudioDetails: (name: string, image: string) => void;
    setSeatNumbers: (numbers: string) => void;
    totalPayment: number;
    getSeatSelected: (seats: Seat[]) => string;
    resetSeats: () => void;
    resetFilters: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialBookingInfo: BookingInfo = {
    location: 'Bogor',
    date: 1,
    time: 1,
    seatsId: [],
    studioId: '',
    studioName: '',
    studioImage: '',
    seatNumbers: '',
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bookingInfo, setBookingInfo] = useLocalStorage<BookingInfo>('bookingInfo', initialBookingInfo);

    const setLocation = useCallback((location: string) => setBookingInfo(prev => ({ ...prev, location })), [setBookingInfo]);
    const setDate = useCallback((date: number) => setBookingInfo(prev => ({ ...prev, date })), [setBookingInfo]);
    const setTime = useCallback((time: number) => setBookingInfo(prev => ({ ...prev, time })), [setBookingInfo]);
    const setStudioId = useCallback((studioId: string) => setBookingInfo(prev => ({ ...prev, studioId })), [setBookingInfo]);
    const setStudioDetails = useCallback((name: string, image: string) => {
        setBookingInfo(prev => ({ ...prev, studioName: name, studioImage: image }));
    }, [setBookingInfo]);
    const setSeatNumbers = useCallback((numbers: string) => {
        setBookingInfo(prev => ({ ...prev, seatNumbers: numbers }));
    }, [setBookingInfo]);

    const handleSeatClick = useCallback((seatId: number) => {
        setBookingInfo(prev => {
            const seatsId = prev.seatsId.includes(seatId)
                ? prev.seatsId.filter(id => id !== seatId)
                : [...prev.seatsId, seatId];
            return { ...prev, seatsId };
        });
    }, [setBookingInfo]);

    const resetSeats = useCallback(() => {
        setBookingInfo(prev => ({ ...prev, seatsId: [], seatNumbers: '' }));
    }, [setBookingInfo]);

    const resetFilters = useCallback(() => {
        setBookingInfo(prev => ({
            ...prev,
            location: 'Bogor',
            date: 1,
            time: 1,
        }));
    }, [setBookingInfo]);

    const totalPayment = 35000 * bookingInfo.seatsId.length;

    const getSeatSelected = useCallback((seats: Seat[]) => {
        if (!seats) return '';
        return seats
            .filter(seat => bookingInfo.seatsId.includes(seat.id))
            .map(seat => seat.seat_number)
            .join(', ');
    }, [bookingInfo.seatsId]);

    return (
        <BookingContext.Provider value={{
            bookingInfo,
            setLocation,
            setDate,
            setTime,
            handleSeatClick,
            setStudioId,
            setStudioDetails,
            setSeatNumbers,
            totalPayment,
            getSeatSelected,
            resetSeats,
            resetFilters,
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
