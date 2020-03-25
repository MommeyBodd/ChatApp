module.exports = {
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  setupFilesAfterEnv: [`${__dirname}/jest.setup.js`]
};
