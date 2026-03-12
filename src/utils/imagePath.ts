/**
 * Image Path Utility
 * File: src/utils/imagePath.ts
 * Purpose: Helper untuk menangani basePath pada gambar di static export
 */

/**
 * Get the base path for the current environment
 * Uses NEXT_PUBLIC_BASE_PATH environment variable
 */
export function getBasePath(): string {
  // In production, use NEXT_PUBLIC_BASE_PATH
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
  }
  // In development, no basePath needed
  return ''
}

/**
 * Get full image path with basePath
 * @param src - Image source path (e.g., '/images/loker-luar-negeri/qatar1.webp')
 * @returns Full path with basePath prepended
 */
export function getImagePath(src: string): string {
  if (!src) return src
  
  const basePathValue = getBasePath()
  
  // If src already starts with basePath, return as is
  if (basePathValue && src.startsWith(basePathValue)) {
    return src
  }
  
  // If src starts with /, prepend basePath
  if (src.startsWith('/')) {
    return basePathValue + src
  }
  
  return src
}

/**
 * Get static asset path with basePath
 * @param path - Asset path
 * @returns Full path with basePath prepended
 */
export function getAssetPath(path: string): string {
  return getImagePath(path)
}
