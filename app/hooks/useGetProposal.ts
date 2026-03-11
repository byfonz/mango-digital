import { proposalQuery } from "@/lib/queries/proposal"
import { client } from "@/lib/sanity"
import { Proposal } from "@/types/proposal";

export async function getProposal(
    slug:string
): Promise<Proposal | null> {
    return client.fetch<Proposal | null>(proposalQuery, { slug });
};