require('dotenv').config()

module.exports = {
    repository: "@hetic/G01-E01-BARK",
    personalAccessToken: process.env.SPECIFY_KEY,
    rules: [
        {
            path: "src/assets/styles/01-utils/variables/colors/_bark-theme.scss",
            filter: {
                types: [
                    "color"
                ]
            },
            parsers: [
                {
                    name: "kebabcasify",
                    options: {
                        keys: [
                            "name"
                        ]
                    }
                },
                {
                    name: "sort-by",
                    options: {
                        keys: [
                            "name"
                        ]
                    }
                },
                {
                    name: "to-css-custom-properties",
                    options: {
                        formatConfig: {
                            selector: ":root[data-theme='bark']"
                        }
                    }
                }
            ]
        }
    ]
}