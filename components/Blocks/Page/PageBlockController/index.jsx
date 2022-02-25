/*
 * Page Block - Controller
 */

import * as Page from '@components/Blocks/Page';

const PamoPageBlockController = ({ __typename, ...rest }, index) => {

    let Block;
    let props;

    switch(__typename) {
        case 'ComponentPageHeading':
            const { ...pageHeading } = rest;

            props = {
                ...pageHeading
            };

            Block = Page.Heading;
            break;
        case 'ComponentPageHero':
            const { image: { data: { attributes: heroImage } }, page_heading: heroHeading, links } = rest;

            props = {
                ...heroImage,
                ...heroHeading,
                links
            };

            Block = Page.Hero;
            break;
    }

    return Block ? <Block key={`index-${index}`} {...props} /> : null;
};

export default PamoPageBlockController;