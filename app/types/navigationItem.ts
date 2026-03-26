export type NavigationItem = {
    key: number;
    title:  string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
    items?: NavigationItem[] | null;
}