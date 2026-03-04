/**
 * Menu Data
 * File: src/data/menuData.ts
 * Purpose: Data menu sidebar - MUDAH DI-UPDATE
 * 
 * Website ini adalah PUBLIC PORTAL untuk:
 * - Rekanan Agensi LP3I College
 * - Calon Customer yang tertarik dengan produk
 * 
 * TIDAK ADA fitur login/user profile
 */

import { MenuGroup } from '@/types/menu.types'

export const menuData: MenuGroup[] = [
  {
    id: 'main',
    title: 'Menu Utama',
    items: [
      {
        id: 'beranda',
        label: 'Beranda',
        icon: 'home',
        href: '/',
      },
      {
        id: 'produk',
        label: 'Produk',
        icon: 'box',
        children: [
          {
            id: 'produk-list',
            label: 'Daftar Produk',
            href: '/produk',
          },
          {
            id: 'produk-kategori',
            label: 'Kategori',
            href: '/produk/kategori',
          },
          {
            id: 'produk-harga',
            label: 'Harga',
            href: '/produk/harga',
          },
        ],
      },
      {
        id: 'knowledge',
        label: 'Knowledge Base',
        icon: 'book',
        children: [
          {
            id: 'knowledge-artikel',
            label: 'Artikel',
            href: '/knowledge/artikel',
          },
          {
            id: 'knowledge-tutorial',
            label: 'Tutorial',
            href: '/knowledge/tutorial',
          },
          {
            id: 'knowledge-faq',
            label: 'FAQ',
            href: '/knowledge/faq',
          },
        ],
      },
    ],
  },
  {
    id: 'informasi',
    title: 'Informasi',
    items: [
      {
        id: 'pengumuman',
        label: 'Pengumuman',
        icon: 'megaphone',
        href: '/pengumuman',
        badge: '3',
        badgeColor: 'info',
      },
      {
        id: 'agenda',
        label: 'Agenda',
        icon: 'calendar',
        href: '/agenda',
      },
      {
        id: 'kontak',
        label: 'Kontak',
        icon: 'phone',
        href: '/kontak',
      },
    ],
  },
]

export default menuData
