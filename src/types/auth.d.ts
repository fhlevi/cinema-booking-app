export type RegisterForm = {
    name: string,
    email: string,
    password: string
    confirm_password: string
}

export type SigninForm = Pick<RegisterForm, 'email' | 'password'>

export type ValidateToken = {
    [key: string]: string | string[] | undefined
}
