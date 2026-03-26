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
- Gsap

CMS
- Sanity CMS
- GROQ queries

Backend
- Laravel API
- Node.js Server

## Instructions
1. Analyze the provided file structure, explain the problems clearly and identify:
    - Architecture problems
    - Scalability issues
    - Duplication and spaghetti code issues
2. Help me add a production ready a custom layout for the page.

## Errors
- React.Children.only expected to receive a single React element child..

## Output Format
- Structure your response in the following order:
- Architecture Issues Found
- Improvements
- Recommended Folder Structure
- Production-ready code examples.

## Codebase
### Folder Structure
app/
├── (app)/   
|   ├── dashboard
|   ├── documents
|   ├── invoices
|   ├── marketing/
|     ├── campanas/
|       ├── [slug]
|       ├── crear
|   ├── layout.tsx
├── (auth)/       
|   ├── login
|   ├── register
|   ├── layout.tsx
├── (portal)/ 
|   ├── dashboard
|   ├── invoices      
|   ├── projects    
|   ├── layout.tsx  
├── (site)/    
|   ├── about
|   ├── projects
|   ├── services
|   ├── layout.tsx 
|   ├── page.tsx 

#### app/(app)/admin/proposal/create/page.tsx
export default function Page() {
  const form = useForm({
    resolver: zodResolver(ProposalFormSchema),
    shouldUnregister: false,
    defaultValues: {
      meta: {
        clientName: "",
        date: new Date(),
        project: "",
      },
      context: {
        executiveSummary: "",
        objectives: "",
      },
      strategy: {
        solution: "",
      },
      timeline: "",
    },
  });

  const values = form.watch();

  function onSubmit(data: z.infer<typeof ProposalFormSchema>) {
    console.log(data);
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex px-6 py-3 items-center justify-between">
        <h2>Add Proposal</h2>
        <div className="flex items-center gap-2">
          <Button>Guardar Propuesta</Button>
          <PDFDownloadLink
            document={<ProposalPDF data={values} />}
            fileName='proposal.pdf'
          >
            {({ loading }) => (
              <Button>{loading ? 'Generando PDF' : 'Descargar PDF'}</Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-0"
        >
          <div className="p-6">
            <ProposalForm />
          </div>
          <div className="flex flex-col p-6 gap-6 items-center justify-center overflow-y-auto bg-neutral-100">
            <DocumentPreview data={values} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

#### components/documents/document-renderer.tsx
type Props = {
  data: z.infer<typeof ProposalFormSchema>;
};

export function DocumentPreview({ data }: Props) {
  const formatDate = data.meta.date
    ? format(new Date(data.meta.date), "PPP")
    : "Fecha No Definida";
  return (
    <div className="w-full min-h-full p-10 bg-white">
      {/* Meta */}
      <div className="w-full flex px-10 py-6 items-center justify-between border-b">
        <Image
          src="/images/logo-mango-digital.png"
          alt="logo-mago-digital"
          width={120}
          height={60}
        />
        <div className="flex flex-col gap-1">
          {/* Client */}
          <div className="flex gap-1">
            <span className="text-xs font-medium">Cliente:</span>
            <span className="text-xs">
              {data.meta.clientName || "Nombre del Cliente"}
            </span>
          </div>
          {/* Project */}
          <div className="flex gap-1">
            <span className="text-xs font-medium">Proyecto:</span>
            <span className="text-xs">{data.meta.project || "Proyecto"}</span>
          </div>
          {/* Date */}
          <div className="flex flex-wrap gap-1">
            <span className="text-xs font-medium">Fecha:</span>
            <span className="text-xs">{formatDate}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-6">
        {/* Introduction */}
        <div className="block gap-3">
          <p className="text-lg font-medium">Contexto</p>
          <div
            className="prose prose-sm max-w-none gap-1"
            dangerouslySetInnerHTML={{
              __html: data.context.executiveSummary || "<p>Sin Contenido</p>",
            }}
          />
        </div>
        {/* Objectives */}
        <div className="block gap-3">
          <p className="text-lg font-medium">Objetivos</p>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: data.context.objectives || "<p>Sin Contenido</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

#### components/documents/section-renderer.tsx
interface Props {
    section: Section;
    proposal: Proposal;
}

const sectionRegistry: Record<string, ComponentType<Props>> = {
    hero: HeroSection
}

export function SectionRenderer({ section, proposal }: Props) {
    const Component = sectionRegistry[section.type] || DefaultSection
    
    return (
        <Component section={section} proposal={proposal}/>
    )
}


#### components/documents/block-renderer.tsx
interface Props {
    block: Block;
};

export function BlockRenderer ({ block }: Props){
    switch (block._type) {
        case 'textBlock':
            return <TextBlock block={block}/>;

        case 'tableBlock':
            return <TableBlock block={block}/>;

        case 'imageBlock':
            return <ImageBlock block={block}/>;

        case 'sliderBlock':
            return <SliderBlock block={block}/>

        case 'accordionBlock':
            return <AccordionBlock block={block}/>

        case 'subsectionBlock':
            return <SubSectionBlock block={block}/>
    
        default:
            return null;
    }
}

#### types/section.ts
export type Section = {
    _id: string;
    type: SectionType;
    variant: string;
    content: Block[];
}

export type SectionType =
| 'hero'
| 'features'
| 'pricing'
| 'faq'
| 'testimonial'
| 'stats'
| 'gallery'
| 'portfolio'
| 'blog'
| 'team'
| 'cta'
| 'contact';

#### types/block.ts
export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType
  | AccordionBlockType
  | SubSectionBlockType


export type NestedBlock =
  | ContentBlock
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType

#### types/document.ts
export type Document = {
    _id: string;
    title: string;
    slug: string;
    type: DocumentType;
    meta?: Meta;
    blocks?: Block[];
    seo?: Seo; 
}

export type DocumentTemplate = {
    type: DocumentType;
    sections: DocumentSection[];
}

export type DocumentSection = {
    id: string;
    title: string;
    blocks: DocumentBlock[];
}

export type DocumentBlock = {
    type: DocumentBlockType;
    title: string;
    path?: string;
}

export type DocumentType = 
| 'proposal'
| 'invoice'
| 'slideDeck';

export type DocumentBlockType = 
| 'text'
| 'richText'
| 'date'
| 'title';