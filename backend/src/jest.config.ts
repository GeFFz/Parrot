import type {
  InitialOptionsTsJest
} from 'ts-jest';

const config: InitialOptionsTsJest = {
  modulePathIgnorePatterns: [
    '../dist'
  ],
  globals: {
    'ts-jest': {}
  }
}

export default config