import { Button } from "../objects/button";

export type CTABlock = {
    _key: string;
    _type: 'ctaBlock',
    actions: Button[];
}