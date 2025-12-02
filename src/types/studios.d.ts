export type Studio = {
    id: number;
    name: string;
    total_seats: number;
    created_at: string;
    updated_at: string;
};

export type Seat = {
    id: number;
    is_available: boolean;
    seat_number: string;
    studio: Studio;
    studio_id: number;
    studio_name: string;
    created_at: string;
    updated_at: string;
}

export interface Ticket {
    id: number;
    booking_code: string;
    user_id: number;
    user_name: string;
    user_email: string;
    qr_code: string;
    booking_type: "online" | "offline" | string;
    status: "active" | "cancelled" | "pending" | string;
    created_at: string;
    updated_at: string;
    studio: Pick<Studio, 'id'|'name'|'total_seats'>;
    seats: Pick<Seat, 'id'|'seat_number'>[];
}

export type StudioDate = {
    id: number;
    date: number;
}

export type StudioTime = {
    id: number;
    time: string;
}