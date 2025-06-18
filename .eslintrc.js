module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020, // adiciona suporte a recursos ES2020
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',

    // Desliga a regra que reclama da atribuição insegura de valores de tipo desconhecido (ex: configService.get)
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Desliga a regra que reclama da chamada insegura em valor de tipo desconhecido
    '@typescript-eslint/no-unsafe-call': 'off',

    // Se quiser deixar parcialmente ligado e só warning:
    // '@typescript-eslint/no-unsafe-assignment': 'warn',
    // '@typescript-eslint/no-unsafe-call': 'warn',

    // Você pode ativar "strict" para manter o rigor, mas desativar as regras acima resolve seu problema.
  },
};
