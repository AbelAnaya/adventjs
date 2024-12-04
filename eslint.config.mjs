import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser },
        rules: {
            quotes: [2, 'single'],
        },
    },
    pluginJs.configs.recommended,
]
