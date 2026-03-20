import * as Icons from 'lucide-react';

export function Icon({ name, ...props }: { name?: string }) {
    if (!name) {
        return null
    };

    const LucideIcon = (Icons as any)[
        name.charAt(0).toUpperCase() + name.slice(1)
    ];

    if (!LucideIcon) {
        return null
    };

    return <LucideIcon {...props} />
}