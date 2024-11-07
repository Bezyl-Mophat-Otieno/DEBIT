'use client';

import { Form, Input, Button, message, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {LoginFormData} from "@/types";
import {useAuth} from "@/hooks/useAuth";
import { useEffect } from 'react';




export function LoginForm() {
    const router = useRouter();
    const [form] = Form.useForm();
    const {loginDebitUser,isAuthenticating, errored, error, authenticated} = useAuth()

    const [messageApi, contextHolder] = message.useMessage();
    
    const handleSubmit = async (values: LoginFormData) => {
        loginDebitUser(values)
    }

    useEffect(() => {
        if (errored) {
            messageApi.open({
                type: 'error',
                content: error?.message,
            });
        }

        if (authenticated) {
            messageApi.open({
                type: 'success',
                content: 'You are now logged in. Redirecting to dashboard...',
            });
            router.push('/dashboard');
        }
    }, [isAuthenticating]);
    
    return (
    <>
         { contextHolder }
         <Spin spinning={isAuthenticating} tip="Authenticating..." >

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
    </Spin>
    </>
    );
}