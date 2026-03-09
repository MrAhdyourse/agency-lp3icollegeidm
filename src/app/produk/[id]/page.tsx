/**
 * Product Detail Page
 * File: src/app/produk/[id]/page.tsx
 * Purpose: Halaman detail produk dengan modal WhatsApp
 */

import { products } from '@/data/productData'
import ProductDetailClient from './ProductDetailClient'

// Generate static params for static export
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient productId={params.id} />
}