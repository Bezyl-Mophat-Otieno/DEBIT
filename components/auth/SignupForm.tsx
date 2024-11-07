'use client';

import { Form, Input, Button, message, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {SignupFormData} from "@/types";
import {useAuth} from "@/hooks/useAuth";
import { useEffect } from 'react';

interface SignupFormProps {
   readonly setActiveTab: (tab: string)=>void
}

export function SignupForm({ setActiveTab }:SignupFormProps) {
    const [form] = Form.useForm();
    const {signUpDebitUser, isCreating, created, error} = useAuth()
    const [ messageApi, contextHolder ] = message.useMessage()

    useEffect(() => {
        if (created) {
            messageApi.open({
                type: 'success',
                content: 'You have successfully registered',
            });
            setActiveTab('login')
        }
        if (error) {
            messageApi.open({
                type: 'error',
                content: error.message,
            });
        }
    }, [isCreating])

    const handleSubmit = async (values: SignupFormData) => {
            signUpDebitUser(values)
    };

    return (
    <>
        { contextHolder }
        <Spin spinning={isCreating} tip="Registering..." >
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
    </Spin>
    </>
    );
}