import { ProposalHeader } from "@/components/proposal-header";
import { SectionRenderer } from "@/components/section-renderer";
import { getMenu } from "@/hooks/useGetMenu";
import { getProposal } from "@/hooks/useGetProposal";
import { Section } from "@/types/documents/section";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = await getProposal(slug);
  const menu = await getMenu('proposal');

  if (!data) {
    return <p>Proposal Not Found</p>
  };

  console.log(JSON.stringify(data.sections, null, 2))

  return (
    <main className="flex flex-col space-y-10">
      <ProposalHeader nav={menu}/>
      {data.sections.map((section: Section) => (
        <SectionRenderer
          key={section._key}
          section={section}
          proposal={data}
        />
      ))}
    </main>
  );
}
