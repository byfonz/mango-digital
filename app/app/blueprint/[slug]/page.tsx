import { SectionRenderer } from "@/components/section-renderer";
import { getProposal } from "@/hooks/useGetProposal";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = await getProposal(slug);

  if (!data) {
    return <p>Proposal Not Found</p>
  };

  console.log(JSON.stringify(data.sections, null, 2))

  return (
    <main className="flex flex-col space-y-10">
      {data.sections.map((section) => (
        <SectionRenderer
          key={section._key}
          section={section}
          proposal={data}
        />
      ))}
    </main>
  );
}
