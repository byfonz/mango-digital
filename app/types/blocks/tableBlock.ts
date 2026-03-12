import { Table } from "../objects/table";

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  table: Table;
}