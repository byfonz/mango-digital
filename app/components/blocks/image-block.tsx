import { urlFor } from "@/lib/sanity-image";
import { ImageBlockType } from "@/types/block";
import Image from "next/image";

interface Props {
    block: ImageBlockType
};

export function ImageBlock({ block }: Props) {
    if (!block.asset?.url) {
        return null
    };

    const { url, metadata } = block.asset;

    const width = metadata?.dimensions?.width ?? 1200;
    const height = metadata?.dimensions?.height ?? 800;

    return (
        <figure className="space-y-2">
            <Image
                src={url}
                alt={block.caption ?? "Image"}
                width={width}
                height={height}
                className="rounded-md"
            />
            {block.caption && (
                <figcaption className="text-sm text-muted-foreground">
                    {block.caption}
                </figcaption>
            )}
        </figure>
    )
}