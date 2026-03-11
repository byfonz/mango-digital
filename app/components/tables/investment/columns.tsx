'use client'

import { ColumnDef } from '@tanstack/react-table';

export type Investment = {
    id: string;
    title: string;
    description: string;
    amount: string;
}

export const investmentColumns: ColumnDef<Investment>[] = [
    {
        accessorKey: 'title',
        header: 'Concepto'
    },
    {
        accessorKey: 'description',
        header: 'Descripción'
    },
    {
        accessorKey: 'amount',
        header: 'Inversión'
    }
]