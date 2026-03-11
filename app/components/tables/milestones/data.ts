import { Milestone } from "./columns";


export async function getMilestoneData(): Promise<Milestone[]> {
  return [
    {
      id: '1',
      phase: 'Fase 1 – Estrategia y Consultoría de Marketing',
      description: 'Desarrollo de estrategias comerciales y de mercadotecnia a partir del diagnóstico del negocio, mercado y proceso de ventas.',
      period: 'Mes 1',
    },
    {
      id: '2',
      phase: 'Fase 2 – Desarrollo e Implementación',
      description: 'Construcción de los activos digitales necesarios para atraer, convertir y nutrir prospectos.',
      period: 'Mes 2-4',
    },
  ]
}