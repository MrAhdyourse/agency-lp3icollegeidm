'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import type { SkemaKategori } from '@/data/skemaData'

export type SkemaCategoryIconName =
  | 'Code'
  | 'Palette'
  | 'Briefcase'
  | 'Users'
  | 'Calculator'
  | 'BarChart3'
  | 'Award'
  | 'FileText'

const iconByCategory: Record<SkemaKategori, SkemaCategoryIconName> = {
  'it-programming': 'Code',
  'design-multimedia': 'Palette',
  'business-trade': 'Briefcase',
  'hr-administration': 'Users',
  'accounting-tax': 'Calculator',
  'marketing-digital': 'BarChart3',
  'other-professional': 'Award',
}

const fallbackIcon: SkemaCategoryIconName = 'FileText'

const LazyLucideIcon = dynamic(
  async () => {
    const lucide = await import('lucide-react')

    // We resolve the icon at runtime but still keep a strict union for our own mapping.
    const LucideIcon = ({
      name,
      size,
      className,
    }: {
      name: SkemaCategoryIconName
      size?: number
      className?: string
    }) => {
      const IconComponent = (lucide as unknown as Record<string, React.ElementType>)[name]
      const FinalIcon = IconComponent ?? (lucide as unknown as Record<string, React.ElementType>)[fallbackIcon]

      if (!FinalIcon) return null

      return <FinalIcon size={size} className={className} />
    }

    return LucideIcon
  },
  {
    ssr: false,
    // Keep a lightweight placeholder while icon bundle is loading
    loading: () => (
      <span
        aria-hidden
        className="inline-block h-6 w-6 rounded bg-white/20"
      />
    ),
  }
)

export default function SkemaCategoryIcon({
  kategori,
  size = 24,
  className = '',
}: {
  kategori: SkemaKategori
  size?: number
  className?: string
}) {
  const iconName = iconByCategory[kategori] ?? fallbackIcon

  return <LazyLucideIcon name={iconName} size={size} className={className} />
}
