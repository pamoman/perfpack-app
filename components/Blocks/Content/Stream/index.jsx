/*
 * Content Block - Stream
 */

import ReactPlayer from 'react-player';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const PamoStream = ({ url, caption, userSettings }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <Grid container justifyContent="center">
            <Grid sx={styles.streamContainer} item xs={12}>
                <ReactPlayer
                    className="react-player"
                    url={url}
                    playing={settings.autoplay}
                    muted={settings.muted}
                    controls={settings.controls}
                    width="100%"
                    height="100%"
                />
            </Grid>

            {settings.show_caption && caption &&
                <Grid sx={styles.streamCaption} item xs={12}>
                    <Typography color="primary" variant="subtitle1">{caption}</Typography>
                </Grid>
            }
        </Grid>
    )
};

export default PamoStream;