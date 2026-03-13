export type NavigationType = {
    title: string;
    items: NavigationItem[];
}

export type NavigationItem = {
    label: string;
    href: string;
    children: NavigationObject[];
}

export type NavigationObject = {
    label: string;
    href: string;
}