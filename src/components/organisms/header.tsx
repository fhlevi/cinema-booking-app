import React from 'react';
import { Logo } from '@components/atoms/logo';
import { AuthNav } from '@components/organisms/auth-nav';

export const Header = () => {
    return (
        <div className="flex items-center justify-between px-[32px] py-[18px]">
            <Logo />
            <AuthNav />
        </div>
    );
};
