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
1. Analyze the provided file structure, explain the problems clearly and identify:
    - Architecture problems
    - Scalability issues
    - Duplication and spaghetti code issues
2. Reorganize files for a scalable sanity cms and clean separation of concerns, Sanity will stay like content only more likely for marketing pages and Laravel will be handling proposals, strategys, invoices, quotations and many strucutred documents.
3. Add missing files needed for a production agency os cms system.

## Errors
- Sanity: type "<unnamed_type_@_index_13>"
- Nextjs: You cannot have two parallel pages that resolve to the same path. Please check /(app)/dashboard and /(portal).

## Output Format
- Structure your response in the following order:
- Architecture Issues Found
- Improvements
- Recommended Folder Structure
- Production-ready code examples.

## Codebase
### NextJS Folder Structure
app/
├── (app)/   
|   ├── dashboard
|   ├── documents
|   ├── invoices
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

### CMS
#### cms/schemaTypes/index.ts
export const schemaTypes = [
  //Documents
  page,
  post,
  presentation,
  project,
  service,

  authorType,
  navigation,

  //Sections
  section,

  //Blocks
  // Content
  contentBlock,
  headingBlock,
  mediaBlock,
  nestedBlocks,
  quoteBlock,
  // Collection
  collectionBlock,
  galleryBlock,
  teamBlock,
  testimonialBlock,
  // Data
  statsBlock,
  tableBlock,
  timelineBlock,
  // Interactive
  accordionBlock,
  formBlock,
  sliderBlock,
  tabBlock,
  // Marketing
  ctaBlock,
  faqBlock,
  featureBlock,
  pricingBlock,

  //Objects
  //Content
  media,
  meta,
  seo,
  //Fields
  formField,
  //Items
  accordionItem,
  faqItem,
  featureItem,
  pricingItem,
  slideItem,
  statItem,
  tabItem,
  teamMember,
  testimonialItem,
  timelineItem,
  //Navigation
  navigationItem,
  navigationChild,
  navigationGroup,
  socialLink,
  //UI
  badge,
  button,
  link,
]


#### cms/schemaTypes/blocks/ nestedBlock.ts
export const nestedBlocks = [
  {
    type: 'contentBlock',
  },
  {
    type: 'headingBlock',
  },
  {
    type: 'mediaBlock',
  },
  {
    type: 'tableBlock',
  },
  {
    type: 'statsBlock',
  },
  {
    type: 'sliderBlock',
  }
]


