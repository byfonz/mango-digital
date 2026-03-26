'use client'

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page() {
    const router = useRouter();

    return (
        <div className="flex flex-col p-4 lg:p-8">
            <div className="page-header flex items-center justify-between">
                <h2>Proposals</h2>
                <div className="flex items-center gap-2">
                    <Button onClick={() => router.push('/admin/documentos/propuestas/create')}>
                        New Proposal
                    </Button>
                </div>
            </div>
            
        </div>
    );
}