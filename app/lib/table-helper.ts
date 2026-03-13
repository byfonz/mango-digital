import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@/types/objects/table-item";

export function tableHelper(table: Table) {
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
