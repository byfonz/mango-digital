export default function MarketingLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col gap-10">
            <main className="min-h-screen">
                {children}
            </main>
        </div>
    )
}