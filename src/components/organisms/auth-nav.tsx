import React from 'react';
import { Button } from '@components/atoms/button';
import { findToken, removeToken } from '@lib/cookie';
import { cn } from '@lib/cn';

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

    if (!isLogin) {
        return (
            <div className="flex gap-[20px] items-center">
                <a href="/auth/login">
                    <Button className="rounded-[15px] min-w-[100px]">
                        <span className="text-[18px]">Login</span>
                    </Button>
                </a>
                <a href="/auth/register">
                    <Button className="rounded-[15px] min-w-[100px]" outline>
                        <span className="text-[18px]">Register</span>
                    </Button>
                </a>
            </div>
        );
    }

    const isStudio = pathname?.includes('studio');
    const isTicket = pathname?.includes('ticket');

    return (
        <div className="flex gap-[20px] items-center">
            {!isStudio && (
                <a href="/ticket" className={cn(
                    "text-white text-[18px] hover:border-b-3 hover:border-[#1DE782] py-[10px] cursor-pointer",
                    {'border-b-3 border-[#1DE782]': isTicket}
                )}>
                    My Ticket
                </a>
            )}

            <Button className="rounded-[15px] min-w-[100px]" onClick={handleLogout} danger>
                <span className="text-[18px]">Logout</span>
            </Button>
        </div>
    );
};
