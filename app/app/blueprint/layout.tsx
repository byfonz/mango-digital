import { Button } from "@/components/ui/button";
import { blueprintMenu } from "@/lib/blueprint-menu";

export default function BluePrintLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="max-w-7xl min-h-screen overflow-y-auto mx-auto space-y-6 p-10">
            <nav className="flex items-center justify-between">
                {/* Nav Menu */}
                <div className="flex items-center gap-3">
                    {blueprintMenu.map((item) => (
                        <Button key={item.key}>
                            {item.label}
                        </Button>
                    ))}
                </div>
            </nav>
            <main className="flex-1 flex flex-col h-full">
                {children}
            </main>
        </div>
    );
}