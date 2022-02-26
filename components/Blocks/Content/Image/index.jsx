/*
 * Content Block - Image
 */

import Image from 'next/image';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const PamoImage = ({ formats, caption, alternativeText, userSettings }) => {
    const { show_caption } = { ...defaultSettings, ...userSettings };
    const { url } = formats?.large || formats?.medium || formats?.small;

    return (url ?
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    alt={alternativeText}
                    layout='responsive'
                    objectFit='cover'
                    width={16}
                    height={9}
                />
                
                {show_caption &&
                    <Typography sx={styles.caption} color="primary" variant="subtitle1">{caption}</Typography>
                }
            </Grid>
        </Grid>
        :
        null
    )
};

export default PamoImage;