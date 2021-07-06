// jest.config.ts
import type {Config} from '@jest/types';

// Syncronous (vs async) object
const config: Config.InitialOptions = {
  verbose: true,
  cacheDirectory: './tests/cache/',
  errorOnDeprecated: true,
  maxConcurrency: 16,
  maxWorkers: "50%",
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js", "jsx", "ts", "tsx", "json", "node"
  ],
  notify: true,
  notifyMode: "failure-change",
  // Automatically reset mock state before every test. Equivalent to calling
  // jest.resetAllMocks() before each test. This will lead to any mocks having
  // their fake implementations removed but does not restore their initial
  // implementation.
  resetMocks: true,
  //By default, each test file gets its own independent module registry.
  //Enabling resetModules goes a step further and resets the module registry
  //before running each individual test. This is useful to isolate modules for
  //every test so that the local module state doesn't conflict between tests.
  //This can be done programmatically using jest.resetModules().
  resetModules: true,
  rootDir: "./",
  roots: [
    "<rootDir>/src/",
    "<rootDir>/tests/"
  ]
};
export default config;
