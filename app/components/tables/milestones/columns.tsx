'use client'

import { ColumnDef } from '@tanstack/react-table';

export type Milestone = {
    id: string;
    phase: string;
    description: string;
    period: string;
}

export const milestoneColumns: ColumnDef<Milestone>[] = [
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