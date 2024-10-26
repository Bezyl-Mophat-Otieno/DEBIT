'use client';

import { useState } from 'react';
import { Modal, Form, Input, DatePicker, InputNumber, Button } from 'antd';
import { PlusCircleOutlined, DollarOutlined, CalendarOutlined, TagOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {AddIncomeFormData} from "@/types";
import {useIncome} from "@/hooks/useIncome";
import { addIncome } from "@/services/incomeService";

export  async function AddIncomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [form] = Form.useForm();
    const { createIncome, isCreating } = await useIncome()
    

    const handleSubmit = (values: AddIncomeFormData) => {
        createIncome(values)
    };
    return (
        <>
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
                onCancel={() => setIsOpen(false)}
                footer={null}
                maskClosable={false}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="mt-4"
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
                        <Button onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" loading={isCreating}>
                            Add Income
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}