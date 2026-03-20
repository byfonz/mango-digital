export type TableRow = {
    _key: string;
    cells: string[];
};

export type TableItem = {
    rows: TableRow[];
}