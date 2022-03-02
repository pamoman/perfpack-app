/*
 * Content Block - Map
 */

import GoogleMapReact from 'google-map-react';
import defaultSettings from './settings';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './styles';

const Component = ({ label, lat, lng, userSettings }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <Box sx={(theme) => styles.map(theme, settings)}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.googleMapsKey }}
                defaultCenter={{ lat, lng }}
                defaultZoom={settings.zoom}
            >
                <Typography
                    sx={styles.marker}
                    variant="caption"
                    color="secondary"
                    lat={lat}
                    lng={lng}
                >
                    <LocationOnIcon color="error" fontSize="large" />
                    {label}
            </Typography>
        </GoogleMapReact>
    </Box>
    )
};

const Map = (data) => {
    const { settings: mapSettings, ...map } = data;

    const props = {
        ...map,
        userSettings: mapSettings
    };

    return (
        <Component {...props} />
    )
};

export default Map;