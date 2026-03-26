import z from 'zod';

export const ProposalFormSchema = z.object({
    meta: z.object({
        clientName: z.string(),
        date: z.date(),
        project: z.string(),
    }),
    context: z.object({
        executiveSummary: z.string(),
        objectives: z.string(),
    }),
    strategy: z.object({
        solution: z.string(),
    }),
    timeline: z.string(),
})