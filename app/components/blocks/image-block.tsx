import { ImageBlockType } from "@/types/blocks/imageBlock";
import Image from "next/image";

interface Props {
    block: ImageBlockType
};

export function ImageBlock({ block }: Props) {
    if (!block.image.asset?.url) {
        return null
    };

    const { url, metadata } = block.image.asset;

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