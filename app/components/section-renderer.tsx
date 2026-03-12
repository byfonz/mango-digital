import { Section } from "@/types/section";
import { HeroSection } from "./sections/hero-section";
import { DefaultSection } from "./sections/default-section";
import { Proposal } from "@/types/proposal";
import { ComponentType } from "react";
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