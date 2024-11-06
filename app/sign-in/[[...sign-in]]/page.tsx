import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignIn
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "bg-white shadow-xl border-0",
                        headerTitle: "text-2xl font-bold text-gray-900",
                        headerSubtitle: "text-gray-600",
                        formButtonPrimary: "bg-primary hover:bg-primary/90",
                        formFieldInput: "rounded-md border-gray-300",
                        footerActionLink: "text-primary hover:text-primary/90",
                    },
                }}
            />
        </div>
    );
}