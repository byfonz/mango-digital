import { Link } from "../link";

export type NavigationMenuItem = {
    _key:string;
    label: string;
    icon?: string;
    link: Link;
    children: NavigationMenuItem[];
}