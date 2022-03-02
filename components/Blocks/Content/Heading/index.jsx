/*
 * Content Block - Heading
 */

import defaultSettings from './settings';
import { Typography } from '@mui/material';

const Component = ({ title, userSettings }) => {
    const { component, variant } = { ...defaultSettings, ...userSettings };

    return (
        <Typography component={component} variant={variant} align="left">
            {title}
        </Typography>
    )
};

const Heading = (data) => {
    const { settings: headingSettings, ...heading } = data;

    const props = {
        ...heading,
        userSettings: headingSettings
    };

    return (
        <Component {...props} />
    )
};

export default Heading;