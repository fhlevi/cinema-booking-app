import { Button } from '@components/atoms/button'
import { findToken, removeToken } from '@lib/cookie';
import React from 'react'

export const Header = () => {
    const [isLogin, setIsLogin] = React.useState(false);

    
    React.useEffect(() => {
        const token = findToken();

        if (token) {
            setIsLogin(true)
        }
    }, []);

    const handleLogout = () => {
        removeToken();
        window.location.reload();
    }

    const handleAction = () => {
        if (!isLogin) window.location.href = '/auth/register'
        else handleLogout()
    }

    return (
        <div className='flex items-center justify-between px-[32px] py-[18px]'>
            <img src="/assets/images/logo/cinema-logo.png" alt="logo-cinema" />

            <div className='flex gap-[20px] items-center'>
                {!isLogin && (
                    <a href="/auth/login">
                        <Button className='rounded-[15px] min-w-[100px]'>
                            <span className='text-[18px]'>Login</span>
                        </Button>
                    </a>
                )}

                {isLogin && (
                    <p className='text-white text-[18px]'>
                        My Ticket
                    </p>
                )}

                <Button className='rounded-[15px] min-w-[100px]' onClick={handleAction} outline={!isLogin} danger={isLogin}>
                    <span className='text-[18px]'>{isLogin ? 'Logout' : 'Register'}</span>
                </Button>
            </div>
        </div>
    )
}