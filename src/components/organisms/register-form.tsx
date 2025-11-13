import { Button } from '@components/atoms/button'
import {
	Form,
	FormField,
	FormControl,
	FormMessage,
	Input,
	FormLabel
} from '@components/atoms/input'
import { Submit } from '@radix-ui/react-form'
import { signUp } from '@services/auth'
import type { RegisterForm as RegisterFormType } from '@type/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

export const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false)

	const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>();
	
	const mutation = useMutation(signUp);

	const handleRegister = (data: RegisterFormType) => {
		mutation.mutate(data, {
			onSuccess: (response) => {
				console.log('Registration successful:', response);
			},
			onError: (error) => {
				console.error('Registration failed:', error);
			}
		});
	}

	return (
		<Form className="flex flex-col gap-6" onSubmit={handleSubmit(handleRegister)}>
			<FormField name="name">
				<FormLabel>Name</FormLabel>
				<FormControl asChild>
					<Input {...register("name", { required: true })} type="text" placeholder="Enter your name" required />
				</FormControl>
				<FormMessage match="valueMissing">Please enter your name</FormMessage>
			</FormField>

			<FormField name="email">
				<FormLabel>Email</FormLabel>
				<FormControl asChild>
					<Input {...register("email", { required: true })} type="email" placeholder="Enter your email" required />
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
				<div className="relative">
					<FormControl asChild>
						<Input
							{...register("confirm_password", { required: true })}
							type={showPassword ? 'text' : 'password'}
							placeholder="Confirm your password"
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
				<Button className='rounded-[4px]'>
					Create account
				</Button>
			</Submit>
		</Form>
	)
}
