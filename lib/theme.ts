import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#1890ff',
        borderRadius: 6,
    },
    components: {
        Card: {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        },
    },
};