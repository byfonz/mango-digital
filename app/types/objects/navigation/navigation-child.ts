import { Link } from "../link";

export type NavigationChild = {
    _id: string;
    label: string;
    icon?: string;
    link: Link
}