import {SignupFormData, LoginFormData, ClerkSignUpData} from "@/types";

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

export async function persistClerkSignedUpUser(user: ClerkSignUpData) {

    const response = await fetch('/api/clerk-persistence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error('Failed to persist user');
    }
    const data = await response.json();
    
    return data
}