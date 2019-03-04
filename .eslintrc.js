module.exports = {
    root: true,

    env: {
        node: true
    },

    parserOptions: {
        parser: 'babel-eslint',
        esversion: 6
    },

    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/require-default-prop': 'off',
      semi: 'off',
      indent: 'off',
      'space-before-function-paren': 'off',
      quotes: 'off',
      'vue/attributes-order': 'warning',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/v-on-style': 'off',
      'vue/html-self-closing': 'off'
    },

    'extends': [
        'plugin:vue/recommended',
        '@vue/standard'
    ]
}