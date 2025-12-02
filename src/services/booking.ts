import { HTTPClientAuth } from "@lib/http";

interface CheckoutPayload {
    studioId: number;
    seatIds: number[];
}

export const checkoutTicket = async (payload: CheckoutPayload) => {
    const response = await HTTPClientAuth().post('booking/online', payload);
    return response.data;
};

export const getUserTickets = async () => {    
    const response = await HTTPClientAuth().get('booking/my-bookings');
    return response.data;
}