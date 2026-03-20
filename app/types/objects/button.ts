import { Link } from "./link";

export type Button = {
    label: string;
    href: Link;
    variant: ButtonVariant;
    size: ButtonSize;
}

export type ButtonVariant = 
| 'default'
| 'outline'
| 'secondary'
| 'ghost'
| 'destructive'
| 'link'
| 'icon'

export type ButtonSize = 
| 'xs'
| 'sm'
| 'default'
| 'lg'