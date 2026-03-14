You are a senior full-stack engineer and systems architect with deep experience in:
- Next.js (App Router) 16.1.6
- TypeScript
- Sanity CMS 5.14.1
- Component-driven architecture
- Scalable content rendering systems

Your goal is to help me refactor and complete a production-ready implementation for rendering dynamic proposal pages powered by Sanity CMS.

## Objective
Review my current implementation and help me design a clean, scalable, production-ready architecture for:

Sanity → GROQ → TypeScript types → React rendering system

The final solution should:
- Follow development and software design best practices
- Have strong typing
- Separate data logic from UI
- Be maintainable as the project grows

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
    - Schema inconsistencies
    - Type mismatches
    - GROQ issues
    - Architecture problems
    - Scalability issues
2. Help me render the SubSectionBlock.

## Output Format
- Structure your response in the following order:
- Architecture Issues Found
- Improvements
- Recommended Folder Structure
- Production-ready code examples.

## Codebase
### cms/blocks/accordionBlock.tsx
export const accordionBlock = defineType({
    name: 'accordionBlock',
    title: 'Accordion Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Accordion Title',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Accordion Items',
            type: 'array',
            of: [{ type: 'accordionItem' }]
        })
    ]
})

### cms/objects/accordionItem.tsx
export const accordionItem = defineType({
    name: 'accordionItem',
    title: 'Accordion Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Accordion Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Accordion Content',
            type: 'array',
            of: [
                {
                    type: 'textBlock'
                },
                {
                    type: 'imageBlock'
                },
                {
                    type: 'tableBlock'
                },
                {
                    type: 'sliderBlock'
                },
            ]
        })
    ]
})

### lib/queries/blocks/accordionBlockProjection.ts
export const accordionBlockProjection = `
_type == 'accordionBlock' => {
    _key,
    _type,
    title,
    items[]{
        _key,
        title,
        blocks[]{
            ${blockProjection}
        }
    }
}
`

### types/projections/blockProjection.ts
export const blockProjection = `
    _key,
    _type,
    ${textBlockProjection},
    ${imageBlockProjection},
    ${tableBlockProjection},
    ${sliderBlockProjection},
    ${accordionBlockProjection},
    blocks[]{
        ...,
        ${textBlockProjection},
        ${imageBlockProjection},
        ${tableBlockProjection},
        ${sliderBlockProjection},
        ${accordionBlockProjection}
    }
`
### types/blocks/accordionBlock.ts
export type AccordionBlockType = {
    _key: string;
    _type: "accordionBlock";
    title?: string;
    items: AccordionItemType[];
}

### types/objects/accordion-item.ts
export type AccordionItemType = {
    _key: string;
    title: string;
    content: Block[];
}

### types/blocks/index.ts
export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType
  | AccordionBlockType
  | SubSectionBlockType


export type NestedBlock =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType

### components/blocks/accordion-block.ts
interface Props {
    block: AccordionBlockType;
};

export function AccordionBlock({ block }: Props) {
    return (
        <Accordion type="single">
            {block.items?.map((item) => (
                <AccordionItem key={item._key} value={item._key}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                        {item.content?.map((block) => (
                            <BlockRenderer
                                key={block._key}
                                block={block}
                            />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

### blueprint/[slug]/page.tsx
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = await getProposal(slug);
  const menu = await getMenu(slug);

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