'use client';

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  WalletOutlined,
  DollarOutlined,
  BarChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';

const { Sider } = Layout;

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'budgeting',
      icon: <WalletOutlined />,
      label: 'Budgeting',
      children: [
        {
          key: '/budgeting/set',
          label: 'Set Budget',
        },
        {
          key: '/budgeting/view',
          label: 'View Budgets',
        },
      ],
    },
    {
      key: 'expenses',
      icon: <DollarOutlined />,
      label: 'Expenses',
      children: [
        {
          key: '/expenses/add',
          label: 'Add Expense',
        },
        {
          key: '/expenses/history',
          label: 'Expense History',
        },
      ],
    },
    {
      key: 'reports',
      icon: <BarChartOutlined />,
      label: 'Reports',
      children: [
        {
          key: '/reports/summary',
          label: 'Summary Reports',
        },
        {
          key: '/reports/analysis',
          label: 'Charts & Analysis',
        },
      ],
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="min-h-screen bg-white shadow-md"
      theme="light"
    >
      <div className="p-4 text-center">
        <h1 className={`text-primary font-bold transition-all duration-200 ${
          collapsed ? 'text-lg' : 'text-2xl'
        }`}>
          DEBIT
        </h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={['budgeting', 'expenses', 'reports']}
        items={menuItems}
        onClick={({ key }) => router.push(key)}
      />
    </Sider>
  );
};

export default AppSidebar;