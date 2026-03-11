import { Block } from "@/types/section";

interface Props {
    block: Block;
};

export function TableBlock({ block }: Props) {
    const rows = block.table?.rows || [];

    return (
        <div>
            {block.title && (
                <h2 className="text-lg font-medium">
                    {block.title}
                </h2>
            )}
        </div>
    );
}