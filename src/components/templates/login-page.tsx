import { LoginForm } from '@components/organisms/login-form';
import { Card } from '@components/atoms/card';
import { ArrowLeft } from 'lucide-react';
import { MainWrapper } from '@components/layouts/main-wrapper';
import { withQueryProvider } from '@providers/query-provider';

const LoginPageComponent = () => {
    return (
        <MainWrapper section='auth'>
            <div className='w-[90%] m-auto'>
                <Card background='#ffffff' className='flex flex-col rounded-[10px] gap-[40px] p-[44px]'>
                    <div className='flex flex-col gap-6'>
                        <a href="/" className='flex gap-[15px] items-center'>
                            <ArrowLeft size={30} />
                            <p className='text-[30px] font-semibold'>Login to your account</p>
                        </a>

                        <LoginForm />

                        <p className='text-center text-[#BEBEBF]'>
                            Don’t have an account ?{' '}
                            <a href="/auth/register" className='text-[#1DE782] underline'>
                                Register Here
                            </a>
                        </p>
                    </div>
                </Card>
            </div>
        </MainWrapper>
    )
}

export const LoginPage = withQueryProvider(LoginPageComponent)