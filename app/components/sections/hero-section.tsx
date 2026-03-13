import { Section } from "@/types/documents/section";
import { BlockRenderer } from "../block-renderer";
import type { Proposal } from "@/types/documents/proposal";
import { LucideCalendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { urlFor } from "@/lib/sanity-image";
interface Props {
  section: Section;
  proposal: Proposal;
}

export function HeroSection({ section, proposal }: Props) {
  const coverImage = proposal.coverImage;
  const date = proposal.meta?.date;
  const tags =  proposal.meta?.tags;

  const imageUrl = coverImage
    ? urlFor(coverImage).width(2000).height(420).fit("crop").url()
    : null

  return (
    <section>
      {/* Cover Image */}
      {imageUrl && (
        <div className=" w-full h-[420px] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt=''
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}
      {/* Meta */}
      <div className="flex items-center gap-x-6 text-xs">
        {/* Date */}
        {date && (
          <span className="flex items-center gap-1 text-xs">
            <LucideCalendar size={12} />
            {date}
          </span>
        )}
        {/* Tags */}
        {tags && (
          <Badge variant='outline' className="text-xs">
            {tags}
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
