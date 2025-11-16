import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@components/molecules/dialog';
import { Button } from '@components/atoms/button';

interface Props {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthDialog = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Yuk, login dulu buat lanjut</DialogTitle>
                    <DialogDescription>
                        Kamu baru bisa akses halaman ini setelah login.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <a href="/auth/login">
                        <Button>Login</Button>
                    </a>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}