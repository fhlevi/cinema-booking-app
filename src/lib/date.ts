import type { StudioDate } from "@type/studios";

export const generateNext6Days = (): StudioDate[] => {
    const dates: StudioDate[] = [];
    const today = new Date();

    for (let i = 0; i < 6; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        dates.push({
            id: i + 1,
            date: date.getTime(),
        });
    }

    return dates;
};

export const formatDateShort = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${day} ${month} ${weekday}`;
};

export const formatDateLong = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
};
