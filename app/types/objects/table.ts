export type TableRow = {
    _key: string;
    cells: string[];
};

export type Table = {
    rows: TableRow[];
}