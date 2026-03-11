import data from "./data.json";
import fs from 'fs';
import path from 'path';
import MarkdownRender from "@/components/markdown-renderer";
import { investmentColumns } from "@/components/tables/investment/columns";
import { getInvestmentData } from "@/components/tables/investment/data";
import { InvestmentTable } from "@/components/tables/investment/data-table";
import { milestoneColumns } from "@/components/tables/milestones/columns";
import { getMilestoneData } from "@/components/tables/milestones/data";
import { MilestoneTable } from "@/components/tables/milestones/data-table";
import { getProposal } from "@/lib/getProposal";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  if (!slug) {
    return <p>Proposal Not Found</p>
  };

  const data = getProposal(slug);

  const milestones = await getMilestoneData();
  const investment = await getInvestmentData();

  if (!params) {
    return <p>Blueprint not found.</p>;
  }

  return (
    <main>
      <section>
        <h2 className="font-medium text-2xl">{data.meta?.client}</h2>
      </section>
      {/* Executive Summary */}
      <section>
        <MarkdownRender content={data.summary}/>
      </section>
      {/* System Breakdown */}
      
      {/* Investment Breakdwon */}
      <section>
        <InvestmentTable columns={investmentColumns} data={investment} />
      </section>
      {/* Project Delivarables */}
      {/* Why Us */}
      {/* Next Steps */}
    </main>
  );
}
