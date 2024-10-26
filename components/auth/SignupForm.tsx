'use client';

import { Form, Input, Button, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import {SignupFormData} from "@/types";
import {useAuth} from "@/hooks/useAuth";

export function SignupForm() {
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);
    const [form] = Form.useForm();
    const {signUpDebitUser, isCreating} = useAuth()

    const handleSubmit = async (values: SignupFormData) => {
            signUpDebitUser(values)
            message.success("You have successfully registered")
    };

    return (
        <Form
            form={form}
            name="signup"
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
        >
            <Form.Item
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                ]}
            >
                <Input
                    prefix={<MailOutlined />}
                    placeholder="Email"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 8, message: 'Password must be at least 8 characters!' },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Confirm Password"
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" loading={isCreating}>
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    );
}