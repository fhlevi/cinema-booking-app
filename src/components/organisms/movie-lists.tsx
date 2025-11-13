import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@components/atoms/dialog';
import { MovieCard } from '@components/molecules/movie-card';
import { imagesStudio } from '@constants/studios';
import { getStudios } from '@services/studio';
import type { Studio } from '@type/studios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { findToken } from '@lib/cookie';
import { Button } from '@components/atoms/button';

export const StudioLists = () => {
    const [showDialog, setShowDialog] = useState(false);

    const { data: studios, isLoading, isError } = useQuery<Studio[]>('studios', getStudios);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching movies</div>;
    }

    const handleClickCard = (id: number) => {
        const token = findToken();
        
        if (!token) setShowDialog(true); 
        else window.location.href = `/studio?studioId=${id}`;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] items-center content-center">
            {studios?.map((studio, index) => (
                <MovieCard
                    key={studio.id}
                    id={studio.id}
                    name={studio.name}
                    image={imagesStudio[index]}
                    onClick={handleClickCard}
                />
            ))}

            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Yuk, login dulu buat lanjut</DialogTitle>
                        <DialogDescription>
                            Kamu baru bisa akses halaman ini setelah login.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setShowDialog(false)}>Nanti Aja</Button>
                        <a href="/auth/login">
                            <Button>Login</Button>
                        </a>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
