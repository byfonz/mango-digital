import { Investment } from "./columns";

export async function getInvestmentData(): Promise<Investment[]> {
  return [
    {
      id: '1',
      title: 'Generación de Demanda',
      description: '',
      amount: '$30,000.00'
    }
  ]
}