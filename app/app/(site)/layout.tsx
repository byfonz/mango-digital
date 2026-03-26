import { Header } from "@/components/navigation/header/header";

export default function MarketingLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col justify-center gap-10">
            <Header/>
            <main className="min-h-screen">
                {children}
            </main>
        </div>
    )
}