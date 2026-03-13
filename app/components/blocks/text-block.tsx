"use client";

import type { TextBlockType } from "@/types/blocks/textBlock";
import { PortableText } from "next-sanity";
import { Badge } from "../ui/badge";

interface Props {
  block: TextBlockType;
}

export function TextBlock({ block }: Props) {
  return (
    <div className="prose max-w-none space-y-3">
      {block.title && (
        <Badge variant='outline' className="uppercase">
          {block.title}
        </Badge>
      )}
      <PortableText
        value={block.content}
        components={{
          block: {
            h1: ({ children }) => (
              <h1 className="text-5xl font-semibold tracking-[-0.06em]">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-medium tracking-[-0.06em]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-[28px] font-medium tracking-[-0.06em]">
                {children}
              </h3>
            ),
            normal: ({ children }) => (
              <p className="leading-relaxed tracking-[-0.02em]">{children}</p>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <ul className="ml-4 list-disc space-y-1">{children}</ul>
            ),
            number: ({ children }) => (
              <ol className="ml-4 list-decimal space-y-1">{children}</ol>
            ),
          },
          listItem: {
            bullet: ({ children }) => (
              <li className="list-disc space-y-2">{children}</li>
            ),
            number: ({ children }) => (
              <li className="list-decimal space-y-2">{children}</li>
            ),
          },
        }}
      />
    </div>
  );
}
