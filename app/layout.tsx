import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import AppSidebar from '@/components/AppSidebar';
import { theme } from  '@/lib/theme'
import { Providers} from "@/lib/providers";

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'DEBIT - Financial Tracking',
  description: 'Track your expenses and manage your budget with DEBIT',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icons/icon-192x192.png' },
    { rel: 'apple-touch-icon', url: '/icons/icon-192x192.png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1890ff',
                borderRadius: 6,
              },
            }}
          >
            <div className="flex min-h-screen">
              <AppSidebar />
              <main className="flex-1 p-6">
                <Providers>
                {children}
                </Providers>
              </main>
            </div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}