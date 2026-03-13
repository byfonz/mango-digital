import { TableItemType } from "@/types/objects/table-item";
import { ColumnDef } from "@tanstack/react-table";

export function tableHelper(table: TableItemType) {
  if (!table?.rows?.length) {
    return { 
      columns: [], 
      data: [] 
    };
  }

  const [headerRow, ...bodyRows] = table.rows;

  const columns: ColumnDef<Record<string, string>>[] =
    headerRow.cells.map((header, index) => ({
      accessorKey: `col${index}`,
      header
    }))

  const data = bodyRows.map((row) => {
    const obj: Record<string, string> = {};

    row.cells.forEach((cell, i) => {
      obj[`col${i}`] = cell;
    });

    return obj;
  });

  return { columns, data };
}
