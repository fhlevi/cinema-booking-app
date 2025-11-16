import { SeatBox } from '@components/atoms/seat-box';
import { ScreenBar } from '@components/atoms/screen-bar';
import type { Seat } from '@type/studios';
import type React from 'react';

interface Props {
    seats: Seat[];
    seatsId: number[];
    onSeatChange: (seatId: number) => void;
}

export const SeatSelector = ({
    seats,
    seatsId,
    onSeatChange
}: Props) => {
    return (
        <section className="w-[508px] mx-auto space-y-8">
            <div className="grid grid-cols-10 gap-2">
                {seats
                    ?.slice()
                    .sort((a, b) => a.id - b.id)
                    .map((seatVal) => (
                        <SeatBox 
                            key={seatVal.id} 
                            className='cursor-pointer'
                            seatNumber={seatVal.seat_number} 
                            active={seatsId.includes(seatVal.id)}
                            onClick={() => onSeatChange(seatVal.id)}
                        />
                    ))}
            </div>
            <ScreenBar />
        </section>
    );
};