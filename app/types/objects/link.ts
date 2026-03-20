export type Link = {
    type: 'internal' | 'external';
    reference: 'internal';
    url: string;
    anchor?: string;
    target:  '_self' | '_blank';
}
