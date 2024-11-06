'use client';

import { useState, useEffect } from 'react';
import { Modal, Form, Input, DatePicker, InputNumber, Button, message, Spin } from 'antd';
import { PlusCircleOutlined, DollarOutlined, TagOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useIncome } from "@/hooks/useIncome";
import type { AddIncomeFormData } from "@/types";

export default function AddIncomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [form] = Form.useForm();
    const { createIncome, isCreating, created, errored } = useIncome();
    const [messageApi, contextHolder] = message.useMessage();

    // Handle mutation states
    useEffect(() => {
        if (created) {
            messageApi.success({
                content: 'Income added successfully!',
                duration: 3,
            });
            handleClose();
        }

        if (errored) {
            messageApi.error({
                content: 'Failed to add income. Please try again.',
                duration: 3,
            });
        }
    }, [created, errored, messageApi]);

    const handleSubmit = (values: AddIncomeFormData) => {
        createIncome(values);
    };

    const handleClose = () => {
        form.resetFields();
        setIsOpen(false);
    };

    return (
        <>
            {contextHolder}
            <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => setIsOpen(true)}
                className="ml-4"
                size="large"
            >
                Add Income
            </Button>

            <Modal
                title={
                    <div className="flex items-center gap-2 text-primary">
                        <DollarOutlined className="text-xl" />
                        <span>Add New Income</span>
                    </div>
                }
                open={isOpen}
                onCancel={handleClose}
                footer={null}
                maskClosable={false}
                closable={!isCreating}
            >
                <Spin spinning={isCreating} tip="Adding income...">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        className="mt-4"
                        disabled={isCreating}
                    >
                        <Form.Item
                            label="Amount"
                            name="amount"
                            rules={[
                                { required: true, message: 'Please enter the amount' },
                                { type: 'number', min: 0.01, message: 'Amount must be greater than 0' },
                            ]}
                        >
                            <InputNumber
                                prefix={<DollarOutlined />}
                                className="w-full"
                                placeholder="Enter amount"
                                precision={2}
                                min={0.01}
                                step={0.01}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Source"
                            name="source"
                            rules={[
                                { required: true, message: 'Please enter the income source' },
                                { min: 2, message: 'Source must be at least 2 characters' },
                            ]}
                        >
                            <Input
                                prefix={<TagOutlined />}
                                placeholder="e.g., Salary, Freelance, Investment"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Date"
                            name="incomeDate"
                            initialValue={dayjs()}
                            rules={[{ required: true, message: 'Please select a date' }]}
                        >
                            <DatePicker
                                className="w-full"
                                format="YYYY-MM-DD"
                            />
                        </Form.Item>

                        <Form.Item className="mb-0 flex justify-end gap-2">
                            <Button onClick={handleClose} disabled={isCreating}>
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isCreating}
                            >
                                Add Income
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </>
    );
}