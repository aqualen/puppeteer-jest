module.exports = {
    testTimeout: 30000,
    testMatch: ['**/?(*.)+(e2e|test).[t]s'],
    preset: 'jest-puppeteer',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
};