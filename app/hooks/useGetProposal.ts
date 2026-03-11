import { proposalQuery } from "@/lib/queries/proposal"
import { client } from "@/lib/sanity"

export async function getProposal(slug:string) {
    return client.fetch(proposalQuery, { slug });
};