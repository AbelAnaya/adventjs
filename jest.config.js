export default {
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testEnvironment: 'node',
    testRegex: '/(?!template/).*\\.test\\.ts$',
    transform: { '^.+\\.ts?$': 'ts-jest' },
}
