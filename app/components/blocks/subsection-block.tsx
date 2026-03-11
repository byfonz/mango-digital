
import { PortableText } from "next-sanity";
import { BlockRenderer } from "../block-renderer";
import { SubSectionBlockType } from "@/types/block";

interface Props {
    block: SubSectionBlockType
}

export function SubSectionBlock({ block }: Props) {

    return (
        <div className="space-y-6">
            {block.title && (
                <h2 className="text-lg font-medium">
                    {block.title}
                </h2>
            )}
            {block.content && (
                <PortableText value={block.content}/>
            )}
            {block.blocks?.map((child) => (
                <BlockRenderer
                    key={child._key}
                    block={child}
                />
            ))}
        </div>
    );
}