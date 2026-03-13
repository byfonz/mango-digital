import { proposalQuery } from "@/lib/queries/proposal"
import { client } from "@/lib/sanity"
import { Proposal } from "@/types/documents/proposal";

export async function getProposal(
    slug:string
): Promise<Proposal | null> {
    if (!slug) {
        return null
    };

    const proposal = await client.fetch<Proposal | null>(
        proposalQuery,
        { slug }
    );

    return proposal;
};