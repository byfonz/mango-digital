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
2. Help me render the SubSectionBlock and TableBlock.

## Output Format
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
### lib/queries/proposal.tsx
export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
  _id,
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
    type,
    title,

    blocks[]{
      _key,
      _type,

      _type == "textBlock" => {
        title,
        content
      },

      _type == "imageBlock" => {
        asset,
        caption
      },

      _type == "tableBlock" => {
        table{
          rows[]{
            _key,
            cells
          }
        }
      },

      _type == "subSectionBlock" => {
        title,
        content,
        blocks[]{
          _key,
          _type,

          _type == "textBlock" => {
            title,
            content
          },

          _type == "tableBlock" => {
            table{
              rows[]{
                _key,
                cells
              }
            }
          },

          _type == "imageBlock" => {
            asset,
            caption
        },
        }
      }
    }
  }
}
### types/section.ts
export type Section = {
    _key: string;
    type: SectionType;
    title?: string;
    blocks: Block[];
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

### types/block.ts
export type TextBlockType = {
  _key: string;
  _type: "textBlock";
  title?: string;
  content: PortableTextBlock[];
}

export type ImageBlockType = {
  _key: string;
  _type: "imageBlock";
  asset: any;
  caption?: string;
}

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  table: Table;
}

export type SubSectionBlockType = {
  _key: string;
  _type: "subSectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: Block[];
}

export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SubSectionBlockType

### types/proposal.ts
export type Proposal = {
  _id: string;
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

### types/table.ts
export type TableRow = {
    _key: string;
    cells: string[];
};

export type Table = {
    rows: TableRow[];
}

### lib/table-helper.ts
export function tableHelper(table: Table) {
  if (!table?.rows?.length) {
    return { 
      columns: [], 
      data: [] 
    };
  }

  const [headerRow, ...bodyRows] = table.rows;

  const columns: ColumnDef<Record<string, string>>[] =
    headerRow.cells.map((header, index) => ({
      accessorKey: `col${index}`,
      header
    }))

  const data = bodyRows.map((row) => {
    const obj: Record<string, string> = {};

    row.cells.forEach((cell, i) => {
      obj[`col${i}`] = cell;
    });

    return obj;
  });

  return { columns, data };
}

### hooks/useGetProposal.ts
export async function getProposal(
    slug:string
): Promise<Proposal | null> {
    return client.fetch<Proposal | null>(proposalQuery, { slug });
};

### components/section-renderer.tsx
interface Props {
    section: Section;
    proposal: Proposal;
}

const sectionRegistry = {
    hero: HeroSection
}

export function SectionRenderer({ section, proposal }: Props) {
    const Component = sectionRegistry[section.type] || DefaultSection
    
    return (
        <Component section={section} proposal={proposal}/>
    )
}

### components/block-renderer.tsx
interface Props {
    block: Block;
};

export function BlockRenderer ({ block }: Props){
    switch (block._type) {
        case 'textBlock':
            return <TextBlock block={block}/>;

        case 'tableBlock':
            return <TableBlock block={block}/>

        case 'subSectionBlock':
            return <SubSectionBlock block={block}/>
    
        default:
            return null;
    }
}

### components/blocks/subsection-block.ts
interface Props {
  block: SubSectionBlockType;
}

export function SubSectionBlock({ block }: Props) {
  return (
    <div className="space-y-6">
      {block.title && (
            <h2 className="text-lg font-medium">{block.title}</h2>
       )}
      {block.content && (
        <PortableText value={block.content} />
        )}
      {block.blocks?.length ? (
        <div className="space-y-4">
          {block.blocks.map((child) => (
            <BlockRenderer key={child._key} block={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

### components/blocks/table-block.ts
interface Props {
    block: TableBlockType
}

export function TableBlock({ block }: Props) {
    const { columns, data } = tableHelper(block.table)

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
}

### components/data-table.tsx
interface DataTableProps<TData> {
  columns: ColumnDef<TData>[]
  data: TData[]
}

export function DataTable<TData>({
  columns,
  data
}: DataTableProps<TData>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="rounded-md border">

      <Table>

        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>

              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>

                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                </TableHead>
              ))}

            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>

              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>

                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}

                </TableCell>
              ))}

            </TableRow>
          ))}
        </TableBody>

      </Table>

    </div>
  )
}

## app/blueprint/[slug]/page.tsx
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
