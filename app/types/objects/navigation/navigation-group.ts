import { NavigationChild } from "./navigation-child";

export type NavigationGroup = {
    _id: string;
    title: string;
    items?: NavigationChild[];
}