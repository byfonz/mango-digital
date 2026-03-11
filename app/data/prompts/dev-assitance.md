You are a senior full-stack engineer and systems architect with deep experience in:
- Next.js (App Router)
- TypeScript
- Sanity CMS
- Component-driven architecture
- Scalable content rendering systems

Your goal is to help me refactor and complete a production-ready implementation for rendering dynamic proposal pages powered by Sanity CMS.

## Objective
Review my current implementation and help me design a clean, scalable, production-ready architecture for:

Sanity → GROQ → TypeScript types → React rendering system

The final solution should:
- follow best practices
- have strong typing
- support extensible block rendering
- separate data logic from UI
- be maintainable as the project grows

## Tech Stack
Frontend
- Next.js 16 (App Router)
- TypeScript
- shadcn/ui
- TailwindCSS

Backend / CMS
- Sanity CMS
- GROQ queries

## Instructions
1. Analyze the provided code, explain the problems clearly and identify:
    - schema inconsistencies
    - type mismatches
    - GROQ issues
    - rendering architecture problems
    - scalability issues
2. Review the Sanity schema and suggest improvements for:
    - proposal document structure
    - section modularity
    - block extensibility
    - future scalability
    - If needed, propose a better schema structure.
3. Ensure strong typing across the stack:
    Sanity Schema
    → GROQ Query
    → TypeScript Types
    → React Components

    Fix:
    - incorrect types
    - missing fields
    - inconsistent naming
    - nested block typing
4. Improve the query to ensure:
    - correct field mapping
    - consistent block structures
    - proper nested block support
    - minimal overfetching

## Codebase
- Structure your response in the following order:
- Architecture Issues Found
- Schema Improvements
- TypeScript Improvements
- Improved GROQ Query
- Renderer Architecture
- Refactored Components
- Improved Page Implementation
- Recommended Folder Structure
- Include production-ready code examples.

## Codebase

## types/proposal.ts
export type Proposal = {
  title: string
  slug: string
  meta: {
    date: string
    industry?: string
    location?: string
    tags?: string[]
  }
  sections: Section[]
}

## types/block.ts
export type TextBlock = {
  _key: string;
  _type: "textBlock";
  title?: string;
  content: PortableTextBlock[];
}

export type ImageBlock = {
  _key: string;
  _type: "imageBlock";
  asset: any;
  caption?: string;
}

export type TableBlock = {
  _key: string;
  _type: "tableBlock";
  table: any;
}

export type SubSectionBlock = {
  _key: string;
  _type: "subSectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: Block[];
}

export type Block =
  | TextBlock
  | ImageBlock
  | TableBlock
  | SubSectionBlock

## types/section.ts
export type Section = {
    _key: string;
    type: SectionType;
    title?: string;
    block: Block[];
}

export type SectionType =
  | "hero"
  | "summary"
  | "context"
  | "workPlan"
  | "system"
  | "strategy"
  | "quotation"
  | "conditions"
  | "whyUs"

## lib/queries/proposal.tsx
export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    meta{
        date,
        industry,
        location,
        tags
    },
    sections[]{
        _key,
        _type,
        title,
        blocks[]{
            _key,
            _type,
            title,
            content,
            table,
            blocks[]{
                _key,
                _type,
                title,
                content,
                table,
            }
        }
    }
}
`
## lib/sanity.ts
export const client = createClient({
    projectId: "",
    dataset: "",
    apiVersion: "2024-01-01",
    useCdn: false,
});

## hooks/useGetProposal.ts
export async function getProposal(slug:string) {
    return client.fetch(proposalQuery, { slug });
};

## components/section-renderer.tsx
interface Props {
    section: Section
}

export function SectionRenderer({ section }: Props) {
    return (
        <section>
            {section.title && (
                <h2 className="text-2xl font-medium">
                    {section.title}
                </h2>
            )}
            {section.block.map((block) => (
                <BlockRenderer
                    key={block._key}
                    block={block}
                />
            ))}
        </section>
    )
}

## components/block-renderer.tsx
interface Props {
    block: Block;
};

export function BlockRenderer ({ block }: Props){
    switch (block._type) {
        case 'textBlock':
            return <TextBlock block={block}/>;
    
        default:
            return null;
    }
}

## components/blocks/text-block.tsx
interface Props {
  block: Block;
};

export function TextBlock({ block }: Props) {
  return (
    <div className="prose max-w-none">
      {block.title && (
        <h2>{block.title}</h2>
       )}
      <PortableText value={block.content} />
    </div>
  );
}

## components/blocks/subsection-block.tsx
export function SubSectionBlock({ block }) {

    return (
        <div className="space-y-6">
            {block.title && (
                <h2 className="text-lg font-medium">
                    {block.title}
                </h2>
            )}
            {block.content && (
                <PortableText value={block.content}/>
            )}
            {block.blocks?.map((child) => (
                <BlockRenderer
                    key={child._key}
                    block={child}
                />
            ))}
        </div>
    );
}

## app/blueprint/[slug]/page.tsx
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProposal(params.slug);

  if (!data) {
    return <p>Proposal Not Found</p>
  };

  return (
    <main>
      <section>
        <h2 className="font-medium text-2xl">{data.summary}</h2>
      </section>
      <p className="text-xs text-muted">
        {data.meta.industry}
      </p>
    </main>
  );
}
