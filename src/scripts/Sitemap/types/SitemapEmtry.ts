/**
 * The SitemapEntry type.
 * Matches the structure expected by the `sitemap` node module.
 */
export type SitemapEntry = {
  url: string,
  changefreq: string,
  priority: number
}
