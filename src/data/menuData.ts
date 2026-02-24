/**
 * Menu Data
 * File: src/data/menuData.ts
 * Purpose: Data menu sidebar - MUDAH DI-UPDATE
 * 
 * Cara menambah menu baru:
 * 1. Tambahkan object baru di array menuData
 * 2. Untuk sub-menu, tambahkan array children
 * 3. Untuk badge, tambahkan properti badge dan badgeColor
 * 
 * Contoh:
 * {
 *   id: 'menu-baru',
 *   label: 'Menu Baru',
 *   icon: 'star',
 *   href: '/menu-baru',
 *   badge: 'New',
 *   badgeColor: 'success'
 * }
 */

import { MenuGroup } from '@/types/menu.types'

export const menuData: MenuGroup[] = [
  {
    id: 'main',
    title: 'Menu Utama',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
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
            id: 'produk-promo',
            label: 'Promo',
            href: '/produk/promo',
            badge: 'Hot',
            badgeColor: 'error',
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
  {
    id: 'pengaturan',
    title: 'Pengaturan',
    items: [
      {
        id: 'profil',
        label: 'Profil',
        icon: 'user',
        href: '/profil',
      },
      {
        id: 'bantuan',
        label: 'Bantuan',
        icon: 'help',
        href: '/bantuan',
      },
    ],
  },
]

export default menuData
