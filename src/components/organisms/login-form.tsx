import { Button } from '@components/atoms/button'
import {
	Form,
	FormField,
	FormControl,
	FormMessage,
	Input,
	FormLabel
} from '@components/atoms/input'
import { setToken } from '@lib/cookie';
import { Submit } from '@radix-ui/react-form'
import { signIn, verifyToken } from '@services/auth';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';

type FormData = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	const mutationTokenVerify = useMutation(verifyToken, {
        onSuccess: (response) => {
            setToken(response.token);
			window.location.href = '/'
        },
        onError: (error) => {
            console.error('Verify failed: ', error)
        }
    })
	
	const mutation = useMutation(signIn, {
			onSuccess: (response) => {
				mutationTokenVerify.mutate({ token: response.token })
			},
			onError: (error) => {
				console.error('Login failed:', error);
			}
		});

	const handleLogin = (data: FormData) => {
		mutation.mutate(data);
	}

	return (
		<Form className="flex flex-col gap-6" onSubmit={handleSubmit(handleLogin)}>
			<FormField name="email">
				<FormLabel>Email</FormLabel>
				<FormControl asChild>
					<Input
						{...register("email", { required: true })}
						type="email"
						placeholder="Enter your email"
						required
					/>
				</FormControl>
				<FormMessage match="valueMissing">Please enter your email</FormMessage>
				<FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
			</FormField>

			<FormField name="password">
				<FormLabel>Password</FormLabel>
				<div className="relative">
					<FormControl asChild>
						<Input
							{...register("password", { required: true })}
							type={showPassword ? 'text' : 'password'}
							placeholder="Enter your password"
							required
							className="pr-16"
						/>
					</FormControl>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="px-3 text-gray-600"
						>
							{showPassword ? 'Hide' : 'Show'}
						</button>
					</div>
				</div>
				<FormMessage match="valueMissing">Please enter your password</FormMessage>
			</FormField>

			<Submit asChild>
				<Button disabled={mutation.isLoading} className='rounded-[4px]'>
					{mutation.isLoading ? 
					'Loading...' :
					'Login'}
				</Button>
			</Submit>
		</Form>
	)
}

