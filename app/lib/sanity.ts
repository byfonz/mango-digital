import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "3qg6kr5w",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});