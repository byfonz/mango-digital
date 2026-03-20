import type { TableBlockType } from "@/types/blocks/table";
import { tableHelper } from "@/lib/table-helper";
import { DataTable } from "../tables/data-table";
interface Props {
    block: TableBlockType
}

export function TableBlock({ block }: Props) {
    const { columns, data } = tableHelper(block.table);

    if (!columns.length) {
        return null
    };

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
}