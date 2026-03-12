import { PortableText } from "next-sanity";
import { BlockRenderer } from "../block-renderer";
import { SubSectionBlockType } from "@/types/block";

interface Props {
  block: SubSectionBlockType;
}

export function SubSectionBlock({ block }: Props) {
  if (!block) {
    return null
  };
  
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
            <BlockRenderer 
              key={child._key} 
              block={child} 
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
