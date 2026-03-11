import { PortableText } from "next-sanity";

export function SectionRenderer({ section }) {
    return (
        <section>
            <h2>{section.title}</h2>
            {section.content.map(block => {
                switch (block.type) {
                    case 'textBlock':
                        return (
                            <PortableText
                                key={block.key}
                                value={block.key}
                            />
                        );
                
                    default:
                        break;
                }
            })}
        </section>
    )
}