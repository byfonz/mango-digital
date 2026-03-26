import { NavigationItem } from "@/types/navigationItem";
import {
  LayoutDashboard,
  LucideFile,
  LucideChartBar,
  LucideMegaphone,
  LucideUsersRound,
  LucideListChecks,
  LucideSettings,
  LucideSend,
  LucideLifeBuoy,
  LucideLandmark,
  LucideFolder,
} from "lucide-react";

export const adminNavigation: NavigationItem[] = [
  {
    key: 1,
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    key: 2,
    title: "Documentos",
    url: "/admin/documentos",
    icon: LucideFile,
    items: [
      {
        key: 21,
        title: "Propuestas",
        url: "/admin/documentos/propuestas",
      },
      {
        key: 22,
        title: "Cotizaciones",
        url: "/admin/documentos/cotizaciones",
      },
      {
        key: 23,
        title: "Facturas",
        url: "/admin/documentos/facturas",
      },
      {
        key: 24,
        title: "Contratos",
        url: "/admin/documentos/contratos",
      },
      {
        key: 25,
        title: "Briefs",
        url: "/admin/documentos/briefs",
      },
    ],
  },
  {
    key: 3,
    title: "Marketing",
    url: "/admin/marketing",
    icon: LucideMegaphone,
    items: [
      {
        key: 31,
        title: "Planes",
        url: "/admin/marketing/planes",
      },
      {
        key: 32,
        title: "Estrategias",
        url: "/admin/marketing/estrategias",
      },
      {
        key: 33,
        title: "Campañas",
        url: "/admin/marketing/campañas",
      },
      {
        key: 34,
        title: "Canales",
        url: "/admin/marketing/canales",
      },
      {
        key: 35,
        title: "Contenidos",
        url: "/admin/marketing/contenidos",
      },
    ],
  },
  {
    key: 4,
    title: "CRM",
    url: "/admin/crm",
    icon: LucideChartBar,
    items: [
      {
        key: 41,
        title: "Clientes",
        url: "/admin/crm/clientes",
      },
      {
        key: 42,
        title: "Leads",
        url: "/admin/crm/leads",
      },
      {
        key: 43,
        title: "Negocios",
        url: "/admin/crm/negocios",
      },
    ],
  },
  {
    key: 5,
    title: "Proyectos",
    url: "/admin/proyectos",
    icon: LucideFolder,
  },
  {
    key: 6,
    title: "Finanzas",
    url: "/admin/finanzas",
    icon: LucideLandmark,
    items:[
        {
            key: 61,
            title: 'Facturación',
            url: '/admin/finanzas/facturas',
        },
        {
            key: 62,
            title: 'Pagos',
            url: '/admin/finanzas/pagos',
        },
        {
            key: 63,
            title: 'Presupuestos',
            url: '/admin/finanzas/presupuestos',
        },
        {
            key: 64,
            title: 'Gastos',
            url: '/admin/finanzas/gastos',
        },
    ]
  },
  {
    key: 7,
    title: "Tareas",
    url: "/admin/tareas",
    icon: LucideListChecks,
  },
];
