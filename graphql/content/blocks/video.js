/*
 * Graphql - Video
 */

export const settings = `
    {
        autoplay
        muted
        controls
        show_caption
    }
`;

export default `
    ... on ComponentContentVideo {
        video {
            data {
                attributes {
                    alternativeText
                    caption
                    formats
                    url
                }
            }
        }
        settings ${settings}
    }
`;
