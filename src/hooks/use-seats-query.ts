import { useQuery } from 'react-query';
import { getSeats } from '@services/studio';
import type { Seat } from '@type/studios';

export function useSeatsQuery(studioId: string | null) {
    return useQuery<Seat[]>({
        queryKey: ['seats', { id: studioId }],
        queryFn: getSeats,
        enabled: !!studioId
    });
}
