import { HTTPClientNonAuth } from "@lib/http";

const prefix = 'cinema/studios';

export const getStudios = async () => {
    const response = await HTTPClientNonAuth().get(prefix);
    return response.data;
};

export const getSeats = async (id: string | number) => {
    const response = await HTTPClientNonAuth().get(`${prefix}/${id}/seats`);
    return response.data;
};