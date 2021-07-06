import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { SitemapEntry } from './types/SitemapEmtry';
import * as fs from 'fs';

/**
 * The Sitemap class.
 * Req
 */
export default class Sitemap implements Sitemap {

  public const DEFAULT_RESOURCE_PATH = '../data/sitemap_resources.json';

  /**
   * @var resources The list of resources (mostly URLs, but sometimes files) to
   * be catalogued in the sitemap.
   */
  private const resources: Array<SitemapEntry>;

  /**
   * @constructor.
   */
  public constructor(filepath?: string): void {
    // TODO if filepath? nil this.DEFAULT_RESOURCE_PATH;

    this.dataImporter(filepath);
  }

  public dataImporter(filepath: string): void {}
}
