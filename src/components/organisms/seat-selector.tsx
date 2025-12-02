import { SeatBox } from '@components/atoms/seat-box';
import { ScreenBar } from '@components/atoms/screen-bar';
import type { Seat } from '@type/studios';
import type React from 'react';

interface Props {
    seats: Seat[];
    seatsId: number[];
    onSeatChange: (seat: Seat) => void;
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
                            seatNumber={seatVal.seat_number} 
                            disabled={seatVal.is_available}
                            active={seatsId.includes(seatVal.id)}
                            onClick={() => onSeatChange(seatVal)}
                        />
                    ))}
            </div>
            <ScreenBar />
        </section>
    );
};