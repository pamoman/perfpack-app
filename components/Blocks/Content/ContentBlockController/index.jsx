/*
 * Content Block - Controller
 */

import * as Content from '@components/Blocks/Content';
import { Box } from '@mui/material';

const PamoContentBlockController = ({ __typename, ...rest }, index) => {
    let Block;
    let props;

    switch(__typename) {
        case 'ComponentContentHeading':
            const { settings: headingSettings, ...heading } = rest;

            props = {
                ...heading,
                userSettings: headingSettings
            };

            Block = Content.Heading;
            break;
        case 'ComponentContentWysiwyg':
            const { content } = rest;

            props = {
                content
            };

            Block = Content.Wysiwyg;
            break;
        case 'ComponentContentImage':
            const { image: { data: { attributes: image } }, settings: imageSettings } = rest;

            props = {
                ...image,
                userSettings: imageSettings
            };

            Block = Content.Image;
            break;
        case 'ComponentContentSlideshow':
            const { settings: slideshowSettings, images: { data: images } } = rest;

            props = {
                images,
                userSettings: slideshowSettings
            };

            Block = Content.Slideshow;
            break;
        case 'ComponentContentGallery':
            const { images: { data: gallery }, settings: gallerySettings, ...galleryOptions } = rest;

            props = {
                gallery,
                userSettings: gallerySettings,
                userOptions: galleryOptions
            };

            Block = Content.Gallery;
            break;
        case 'ComponentContentVideo':
            const { settings: videoSettings, video: { data: { attributes: video } } } = rest;

            props = {
                ...video,
                userSettings: videoSettings
            };

            Block = Content.Video;
            break;
        case 'ComponentContentStream':
            const { settings: streamSettings, ...stream } = rest;
            
            props = {
                ...stream,
                streamSettings
            };

            Block = Content.Stream;
            break;
        case 'ComponentContentPdf':
            const { file: { data: { attributes: file } } } = rest;

            props = {
                ...file
            };

            Block = Content.PDF;
            break;
        case 'ComponentContentCompany':
            const { settings: companySettings } = rest;

            props = {
                userSettings: companySettings
            };

            Block = Content.Company;
            break;
        case 'ComponentContentStaff':
            const { employees, settings: staffSettings } = rest;

            const staff = employees.map(employee => employee?.users_permissions_user?.data?.attributes || {});

            props = {
                people: staff,
                userSettings: staffSettings,
            };

            Block = Content.People;
            break;
        case 'ComponentContentPeople':
            const { people, settings: peopleSettings } = rest;

            props = {
                people,
                userSettings: peopleSettings
            };

            Block = Content.People;
            break;
        case 'ComponentContentMap':
            const { settings: mapSettings, ...map } = rest;

            props = {
                ...map,
                userSettings: mapSettings
            };

            Block = Content.Map;
            break;
        case 'ComponentContentTable':
            const { settings: tableSettings, ...table } = rest;

            props = {
                ...table,
                userSettings: tableSettings
            };

            Block = Content.Table;
            break;
    }

    return Block
        ?
            <Box key={`content-block-${index}`} pb={4} component="div">
                <Block {...props} />
            </Box>
        :
            null;
};

export default PamoContentBlockController;