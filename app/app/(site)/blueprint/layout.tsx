export default function BluePrintLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex max-w-7xl min-h-screen overflow-y-auto mx-auto space-y-6 p-10">
            <main className="flex-1 flex flex-col h-full justify-center">
                {children}
            </main>
        </div>
    );
}