/*
 * Graphql - Hero
 */

export default `
    ... on ComponentPageHero {
        image {
            data {
                attributes {
                    alternativeText
                    caption
                    formats
                    url
                }
            }
        }
        page_heading {
            heading
            variant
        }
        links {
            href
            label
            target
        }
    }
`;
