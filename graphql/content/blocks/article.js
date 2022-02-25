/*
 * Graphql - Article
 */

export default (blocks) => (`
    ... on ComponentContentArticle {
        article {
            data {
                attributes {
                    title
                    heading_settings {
                        component
                        variant
                    }
                    content {
                        ${blocks}
                    }
                }
            }
        }
    }
`);