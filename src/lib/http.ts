import axios from "axios";
import Service from "./service";
import { findToken } from "./cookie";

export const HTTPClientAuth = () => {
    const client = axios.create({
        baseURL: Service.API,
        headers: {
            Accept: "application/json",
        },
        timeout: 120000,
    });

    client.interceptors.request.use(
        (config) => {
            config.headers["Authorization"] = `Bearer ${findToken() || ""}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return client;
};

export const HTTPClientNonAuth = () => {
    const client = axios.create({
        baseURL: Service.API,
        headers: {
            Accept: "application/json",
        },
        timeout: 120000,
    });

    return client;
};
