import type { StudioTime } from "@type/studios";
import { generateNext6Days } from "@lib/date";

export const imagesStudio: string[] = [
    'https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/15STTU.jpg',
    'https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/15DOPN.jpg',
    'https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/25NYS3.jpg',
    'https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/25FRIE.jpg',
    'https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/15ALMP.jpg'
]

export const locationStudio: string[] = ['Bogor', 'Bekasi', 'Jakarta'];

export const datesStudio = generateNext6Days();

export const timesStudio: StudioTime[] = [
    { id: 1, time: '10:30' },
    { id: 2, time: '12:30' },
    { id: 3, time: '13:30' },
    { id: 4, time: '14:30' },
]