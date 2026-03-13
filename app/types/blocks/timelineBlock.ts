export type TimelineBlockType = {
    _key: string;
    _type: 'timelineBlock',
    title: string;
    items: TimelineBlockType[];
}