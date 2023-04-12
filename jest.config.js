const nextJest = require('next/jest')
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})
module.exports = createJestConfig({
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    "moduleNameMapper": {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
        "@/(.*)$": "<rootDir>/src/$1"
    },
    testPathIgnorePatterns: ["<rootDir>/src/pages/_app.js",
        "<rootDir>/src/pages/_document.js",
        "<rootDir>/src/pages/index.js",
        "<rootDir>/src/pages/api/"],
    coveragePathIgnorePatterns: ["<rootDir>/src/pages/_app.js",
        "<rootDir>/src/pages/_document.js",
        "<rootDir>/src/pages/index.js",
        "<rootDir>/src/pages/api/"],
})