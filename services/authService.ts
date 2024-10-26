import {QueryClient} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";
import {SignupFormData, LoginFormData} from "@/types";
import {message} from "antd";

export async function signUpDebitUser (values: SignupFormData) {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Signup failed');
        }
        return data;
}

export async function loginDebitUser (values: LoginFormData) {
     const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }
            return data;
}