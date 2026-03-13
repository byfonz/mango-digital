import { ImageBlockType } from "@/types/blocks/imageBlock";
import Image from "next/image";

interface Props {
    block: ImageBlockType
};

export function ImageBlock({ block }: Props) {
    const image = block.image?.asset;
    if (!image?.url) {
        return null
    };

    const width = image.metadata?.dimensions?.width ?? 1200;
    const height = image.metadata?.dimensions?.height ?? 800;

    return (
        <figure className="space-y-2">
            <Image
                src={image.url}
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