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

  return (
    <main>
      <p className="text-xs text-muted">
        {data.meta.industry}
      </p>
      {data.sections.map((section) => (
        <SectionRenderer
          key={section._key}
          section={section}
        />
      ))}
    </main>
  );
}
