'use client'

import { ColumnDef } from '@tanstack/react-table';

export type Fee = {
    id: string;
    phase: string;
    description: string;
    period: string;
}

export const feeColumns: ColumnDef<Fee>[] = [
    {
        accessorKey: 'phase',
        header: 'Fase'
    },
    {
        accessorKey: 'description',
        header: 'Descripción'
    },
    {
        accessorKey: 'period',
        header: 'Periodo'
    }
]