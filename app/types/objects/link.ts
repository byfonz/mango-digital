export type Link = {
    type: 'internal' | 'external';
    url: string;
    anchor?: string;
    target:  '_self' | '_blank';
}
