const files = import.meta.glob('../screenshots/*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

const BY_SLUG: Record<string, string> = {}
for (const [path, url] of Object.entries(files)) {
  const slug = path.split('/').pop()!.replace(/\.jpg$/, '')
  BY_SLUG[slug] = url
}

export function screenshotFor(slug: string): string | undefined {
  return BY_SLUG[slug]
}
