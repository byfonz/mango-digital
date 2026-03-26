import z from "zod";

export const CampaignFormSchema = z.object({
    meta: z.object({
        client: z.string(),
        project: z.string(),
        date: z.date(),
    }),
    context: z.object({
        introduction: z.string(),
        executiveSummary: z.string(),
    })
})