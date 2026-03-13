import { Section } from "@/types/documents/section";
import { BlockRenderer } from "../block-renderer";
import type { Proposal } from "@/types/documents/proposal";
import { LucideCalendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
interface Props {
  section: Section;
  proposal: Proposal;
}

export function HeroSection({ section, proposal }: Props) {
  const image = proposal.coverImage?.asset;

  return (
    <section>
      {/* Cover Image */}
      {image?.url && (
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <Image
            src={image.url}
            alt={proposal.title}
            height={428}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      {/* Meta */}
      <div className="flex items-center gap-x-6 text-xs text-muted-foreground">
        {/* Date */}
        {proposal.meta?.date && (
          <span className="flex items-center gap-1 text-xs">
            <LucideCalendar size={12} />
            {proposal.meta?.date}
          </span>
        )}
        {/* Tags */}
        {proposal.meta?.tags && (
          <Badge variant='outline' className="text-xs">
            {proposal.meta?.tags}
          </Badge>
        )}
      </div>
      <div className="flex flex-col space-y-3">
        {section.blocks?.map((block) => (
          <BlockRenderer 
            key={block._key} 
            block={block} 
          />
        ))}
      </div>
    </section>
  );
}
