/*
 * Page Block - Heading
 */

import { Typography } from '@mui/material';

const Component = ({ heading, variant }) => {
    return (
        <Typography component={"h1"} variant={variant} align="center" gutterBottom>
            {heading}
        </Typography>
    )
};

const Heading = (props) => {
    const { ...pageHeading } = props;

    props = {
        ...pageHeading
    };

    return (
        <Component {...props} />
    )
};

export default Heading;