'use client';

import { Form, Input, Button, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {LoginFormData, SignupFormData} from "@/types";
import {useAuth} from "@/hooks/useAuth";



export function LoginForm() {
    const router = useRouter();
    const [form] = Form.useForm();
    const {loginDebitUser,isAuthenticating} = useAuth()
    
    const handleSubmit = async (values: LoginFormData) => {
        loginDebitUser(values)
        message.success("You have successfully authenticated!")
        router.push('/dashboard')
    }
    
    return (
        <Form
            form={form}
            name="login"
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
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" loading={isAuthenticating}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
}