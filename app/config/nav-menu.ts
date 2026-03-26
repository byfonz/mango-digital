import { NavigationItem } from "@/types/navigationItem";

export const navMenu = [
    {
        key: 1,
        title: 'Inicio',
        url: '/',
    },
    {
        key: 2,
        title: 'Servicios',
        url: '/servicios',
        items: [
            {
                key: 1,
            }
        ],
    },
    {
        key: 3,
        title: '',
        url: '',
    },
    {
        key: 4,
        title: 'Agencia',
        url: '/nosotros',
    },
]

export const servicesMenu = [
    {
        key: 1,
        title: 'Estrategia Digital',
        url: '/servicios/estrategia',
    },
    {
        key: 2,
        title: 'Estrategia Digital',
        url: '/servicios/estrategia',
    },
]