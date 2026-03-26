import z from "zod";

export const LogInFormSchema = z.object({
    email: z.email({ pattern: z.regexes.email}),
    password: z.string(),
})