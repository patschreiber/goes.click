import { SitemapEntry } from "../types/SitemapEmtry";

export interface Sitemap {

  /**
   * @var DEFAULT_RESOURCE_PATH The default path for the sitemap resources.
   */
  DEFAULT_RESOURCE_PATH: string;

  /**
   * Handles importing data from datasheets, such as JSON.
   *
   * @param
   * TODO: xml, csv
   */
  dataImporter(path: string): void;
}
