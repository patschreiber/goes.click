// jest.config.ts
import type {Config} from '@jest/types';

// Syncronous (vs async) object
const config: Config.InitialOptions = {
  verbose: true,
  cacheDirectory: './tests/cache/'
};
export default config;
