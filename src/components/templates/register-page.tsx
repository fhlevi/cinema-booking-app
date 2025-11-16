import { withQueryProvider } from '@providers/query-provider';
import { RegisterForm } from '@components/organisms/register-form';
import { Card } from '@components/atoms/card';
import { Wrapper } from '@components/templates/wrapper';

const RegisterPageComponent = () => {
    return (
        <div className='grid grid-cols-2'>
            <Wrapper>
                <div className='flex flex-col h-full py-[40px] px-[50px] items-start justify-between'>
                    <a href='/'>
                        <img src='/assets/images/logo/cinema-logo.png' />
                    </a>
                    <div className='text-white text-[66px] italic font-thin opacity-70'>
                        <p>Welcome.</p>
                        <p>Begin your cinematic</p>
                        <p>adventure now with</p>
                        <p>our ticketing</p>
                        <p>platform!</p>
                    </div>
                </div>
            </Wrapper>
            <div className="flex flex-col gap-[32px] w-full m-auto px-[135px]">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-semibold">Create an account</h1>
                </div>

                <Card className='flex flex-col gap-[24px]'>
                    <RegisterForm />
                </Card>

                <p className='text-center text-[#BEBEBF]'>
                    Already have an account ?{' '}
                    <a href="/auth/login" className='text-[#1DE782] underline'>
                        Log In
                    </a>
                </p>
            </div>
        </div>
    )
}

export const RegisterPage = withQueryProvider(RegisterPageComponent);
