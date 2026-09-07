import { describe, expect, it } from 'vitest'
import { ABOUT } from './about.ts'
import { ALL_CATEGORIES, CATALOG, CATALOG_BY_SLUG, EMPTY_FILTERS, searchCatalog } from './catalog.ts'

describe('catalog data', () => {
  it('has unique slugs and sane metadata', () => {
    expect(CATALOG.length).toBeGreaterThanOrEqual(40)
    expect(Object.keys(CATALOG_BY_SLUG)).toHaveLength(CATALOG.length)
    for (const g of CATALOG) {
      expect(g.minPlayers).toBeLessThanOrEqual(g.maxPlayers)
      expect(g.minMinutes).toBeLessThanOrEqual(g.maxMinutes)
      expect(g.links.length).toBeGreaterThan(0)
      expect(g.categories.length).toBeGreaterThan(0)
      for (const l of g.links) expect(l.url).toMatch(/^https:\/\//)
      for (const b of g.bestPlayers) {
        expect(b).toBeGreaterThanOrEqual(g.minPlayers)
        expect(b).toBeLessThanOrEqual(g.maxPlayers)
      }
    }
  })

  it('every game has a long write-up and no orphan write-ups exist', () => {
    for (const g of CATALOG) expect(ABOUT[g.slug]?.length, g.slug).toBeGreaterThan(0)
    for (const slug of Object.keys(ABOUT)) expect(CATALOG_BY_SLUG[slug], slug).toBeDefined()
  })

  it('every category has at least one game', () => {
    for (const c of ALL_CATEGORIES) expect(CATALOG.some((g) => g.categories.includes(c))).toBe(true)
  })
})

describe('searchCatalog', () => {
  it('returns everything for empty filters', () => {
    expect(searchCatalog(EMPTY_FILTERS)).toHaveLength(CATALOG.length)
  })

  it('matches by name, case-insensitive, all words', () => {
    const r = searchCatalog({ ...EMPTY_FILTERS, query: 'CODE names' })
    expect(r.map((g) => g.slug)).toContain('codenames')
  })

  it('filters by category, player count, time and price', () => {
    const r = searchCatalog({ ...EMPTY_FILTERS, category: 'social deduction', players: 8, maxTime: 30, freeOnly: true })
    expect(r.length).toBeGreaterThan(0)
    for (const g of r) {
      expect(g.categories).toContain('social deduction')
      expect(g.minPlayers).toBeLessThanOrEqual(8)
      expect(g.maxPlayers).toBeGreaterThanOrEqual(8)
      expect(g.minMinutes).toBeLessThanOrEqual(30)
      expect(g.price).not.toBe('paid')
    }
  })
})
