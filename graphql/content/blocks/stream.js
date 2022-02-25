/*
 * Graphql - Stream
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
    ... on ComponentContentStream {
        url
        alternative_text
        caption
        settings ${settings}
    }
`;
