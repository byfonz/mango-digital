import { Section } from "@/types/documents/section";
import { BlockRenderer } from "../block-renderer";
import { Proposal } from "@/types/proposal";
import { Block, TextBlockType } from "@/types/block";
import { LucideCalendar } from "lucide-react";
interface Props {
    section: Section;
    proposal: Proposal;
};

export function HeroSection({ section, proposal }: Props) {
    const { meta } = proposal;

    return (
        <section>
            <div className="flex items-center gap-x-6">
                {/* Date */}
                <span className="flex items-center gap-1 text-xs">
                    <LucideCalendar size={12}/>
                    {meta.date}
                </span>
                {/* Industry */}
                <span className="flex items-center gap-1 text-xs">
                    <LucideCalendar size={12}/>
                    {meta.industry}
                </span>
            </div>
            <div className="flex flex-col space-y-3">
                {section.blocks.map((block) => (
                    <BlockRenderer
                        key={block._key}
                        block={block}
                    />
                ))}
            </div>
        </section>
    );
}