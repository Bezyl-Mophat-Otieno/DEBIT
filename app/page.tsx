'use client'
import {Card, Row, Col, Statistic, Tabs} from 'antd';
import Image from "next/image";
import {LoginForm} from "@/components/auth/LoginForm";
import {SignupForm} from "@/components/auth/SignupForm";
import {Typography} from "antd";
import {useState} from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const { Title } = Typography;

  return (
      <div className="min-h-screen flex">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-blue-50">
          <Image
              src="/images/debit-home.jpg"
              alt="Budget Management"
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm">
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <Card className="w-full max-w-md shadow-lg">
            <Title level={2} className="text-center mb-8 text-primary">
              DEBIT
            </Title>
              
            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                centered
                items={[
                  {
                    key: 'login',
                    label: 'Login',
                    children: <LoginForm />,
                  },
                  {
                    key: 'signup',
                    label: 'Sign Up',
                    children: <SignupForm />,
                  },
                ]}
            />
          </Card>
        </div>
      </div>
  );
}