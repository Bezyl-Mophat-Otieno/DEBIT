import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#1677ff',
        borderRadius: 6,
    },
    components: {
        Button: {
            primaryColor: '#1677ff',
        },
        Card: {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        },
    },
};