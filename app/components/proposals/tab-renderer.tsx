import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"

export function TabRenderer({ proposal }) {
    return (
        <Tabs defaultValue={proposal.tabs[0]?.id}>
            <TabsList>
                {proposal.tabs.map(tab => (
                    <TabsTrigger 
                        key={tab.id} 
                        value={tab.id}
                    >
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {proposal.tabs.map(tab => (
                <TabsContent
                    key={tab.id}
                    value={tab.id}
                >
                    {tab.sections.map(section => (

                    ))}
                </TabsContent>
            ))}
        </Tabs>
    );
}