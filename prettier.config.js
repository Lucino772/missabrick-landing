/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    arrowParens: "always",
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
    tailwindFunctions: ["cvx", "cn"],
    importOrder: [
        "^react$",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@/assets/(.*)$",
        "",
        "^@/components/ui/(.*)$",
        "^@/components/custom/(.*)$",
        "^@/components/(.*)$",
        "",
        "^@/modules/(.*)$",
        "^@/lib/(.*)$",
        "^@/helpers/(.*)$",
        "^[./]",
    ],
};

export default config;
