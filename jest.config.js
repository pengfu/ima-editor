module.exports = {
    "moduleFileExtensions": [
        "js", "jsx","css","less"
    ],
    "testMatch": [
        "**/**/__tests__/**/*-test.js?(x)"
    ],
    "moduleNameMapper": {
        "@common/(.*)": "<rootDir>/app/common/$1",
        "@util/(.*)$": "<rootDir>/app/util/$1",
        "@assets/(.*)": "<rootDir>/assets/$1",
        "@components/(.*)": "<rootDir>/app/components/$1"
    },
    "transformIgnorePatterns": ["/node_modules/"],
    "transform": {
        "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
    },
    "coverageDirectory":"<rootDir>/__tests__/coverage"
}