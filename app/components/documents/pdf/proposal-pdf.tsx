import {
  Document,
  Page,
  Text,
  View,
  StyleSheet, 
  Image
} from "@react-pdf/renderer";

export function ProposalPDF({ data }: any) {
    return (
        <Document>
            <Page size='A4'>
                <View>
                    <Text>
                        {data.meta.clientName}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}