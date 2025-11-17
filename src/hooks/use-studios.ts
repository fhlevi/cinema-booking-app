import { useQuery } from 'react-query';
import { getStudios } from '@services/studio';
import type { Studio } from '@type/studios';

export function useStudios() {
    return useQuery<Studio[]>({
        queryKey: 'studios',
        queryFn: getStudios
    });
}
