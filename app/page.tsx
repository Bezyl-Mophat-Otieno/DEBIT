import Link from 'next/link';
import Image from 'next/image';
import { PieChart, Wallet, LineChart, Shield, CreditCard, BellRing } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Smart Financial Management for Modern Life
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Take control of your finances with DEBIT. Track expenses, set budgets, and achieve your financial goals with our comprehensive solution.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                    href="/auth"
                                    className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <Image
                                src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80"
                                alt="Financial Dashboard"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to manage your finances
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Powerful features to help you track, manage, and grow your money.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <PieChart className="h-6 w-6" />,
                                title: 'Budget Planning',
                                description: 'Set and track budgets across different categories to maintain financial discipline.'
                            },
                            {
                                icon: <Wallet className="h-6 w-6" />,
                                title: 'Expense Tracking',
                                description: 'Monitor your daily expenses and categorize them automatically.'
                            },
                            {
                                icon: <LineChart className="h-6 w-6" />,
                                title: 'Financial Analytics',
                                description: 'Get insights into your spending patterns with detailed reports and charts.'
                            },
                            {
                                icon: <Shield className="h-6 w-6" />,
                                title: 'Secure Platform',
                                description: 'Bank-grade security to protect your sensitive financial information.'
                            },
                            {
                                icon: <CreditCard className="h-6 w-6" />,
                                title: 'Bill Reminders',
                                description: 'Never miss a payment with automated bill payment reminders.'
                            },
                            {
                                icon: <BellRing className="h-6 w-6" />,
                                title: 'Smart Notifications',
                                description: 'Get alerts for unusual spending and budget overruns.'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to take control of your finances?
                    </h2>
                    <p className="mt-4 text-lg text-white/90">
                        Join thousands of users who are already managing their money smarter with DEBIT.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/auth"
                            className="rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">DEBIT</h3>
                            <p className="text-gray-400">
                                Your personal finance companion for a better financial future.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Features</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Budget Planning</li>
                                <li>Expense Tracking</li>
                                <li>Financial Analytics</li>
                                <li>Bill Reminders</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-gray-400">
                                <Link
                                    href="/auth"
                                    className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
                                    >
                                    Get Started
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} DEBIT. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}