export default function BluePrintLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="max-w-7xl min-h-screen overflow-y-auto mx-auto space-y-6 p-10">
            <main className="flex-1 flex flex-col h-full">
                {children}
            </main>
        </div>
    );
}