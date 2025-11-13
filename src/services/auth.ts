import { HTTPClientAuth, HTTPClientNonAuth } from "@lib/http";
import type { RegisterForm, SigninForm, ValidateToken } from "@type/auth";

const prefix = 'auth'

export const signIn = async (form: SigninForm) => {
    const response = await HTTPClientNonAuth().post(`${prefix}/login`, form);
    return response.data;
};

export const verifyToken = async (payload: ValidateToken) => {
    const response = await HTTPClientNonAuth().post(`${prefix}/verify`, payload);
    return response.data;
};

export const signUp = async (form: RegisterForm) => {
    const response = await HTTPClientAuth().post(`${prefix}/register`, form);
    return response.data;
}
