/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.spec.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/demo/", "/dist/", "/src/"],
};
