export type Section = {
    key: string;
    title: string;
    components: Component[];
}

type Component = {
    key: string;
    children: React.FC,
}

type SubSection = {
    key: string;
    
}