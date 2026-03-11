"use client";

import { TextBlockType } from "@/types/block";
import { PortableText } from "next-sanity";

interface Props {
  block: TextBlockType;
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
