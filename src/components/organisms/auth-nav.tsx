import React from 'react';
import { Button } from '@components/atoms/button';
import { findToken, removeToken } from '@lib/cookie';

export const AuthNav = () => {
    const [isLogin, setIsLogin] = React.useState(false);
    const [pathname, setPathname] = React.useState<string | null>(null);

    React.useEffect(() => {
        const token = findToken();
        if (token) {
            setIsLogin(true);
        }
    }, []);
    
    React.useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    const handleLogout = () => {
        removeToken();
        window.location.reload();
    };

    const handleRegister = () => {
        window.location.href = '/auth/register';
    };

    if (!isLogin) {
        return (
            <div className="flex gap-[20px] items-center">
                <a href="/auth/login">
                    <Button className="rounded-[15px] min-w-[100px]">
                        <span className="text-[18px]">Login</span>
                    </Button>
                </a>
                <Button
                    className="rounded-[15px] min-w-[100px]"
                    onClick={handleRegister}
                    outline
                >
                    <span className="text-[18px]">Register</span>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex gap-[20px] items-center">
            {!pathname?.includes('studio') && <p className="text-white text-[18px]">My Ticket</p>}
            <Button
                className="rounded-[15px] min-w-[100px]"
                onClick={handleLogout}
                danger
            >
                <span className="text-[18px]">Logout</span>
            </Button>
        </div>
    );
};
