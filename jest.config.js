module.exports = {
    rootDir: './src',

    // The glob patterns Jest uses to detect test files.
    testMatch: ['<rootDir>/*.test.js'],

    // A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function for transforming source
    // files.
    transform: {
        '^.+.jsx?$': 'babel-jest'
    },

    // A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module.
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/jest/__mocks__/fileMock.js',
        '\\.(css|scss)$': '<rootDir>/tools/jest/__mocks__/styleMock.js'
    },

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing.
    snapshotSerializers: ['enzyme-to-json/serializer']
};
