// jest.config.js
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@providers/(.*)$': '<rootDir>/src/providers/$1',
    '^@adapters/(.*)$': '<rootDir>/src/adapters/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@locales/(.*)$': '<rootDir>/src/locales/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
  },
};
