/*
 * Page Block - Hero
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles';
import { Grid, Box, Typography, Button } from '@mui/material';

const PamoHero = ({ heading, variant, formats, alternativeText, links }) => {
    const url = formats?.large?.url;

    return (
        <Box sx={styles.hero} component="section">
            <Box sx={styles.overlay} />

            <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                alt={alternativeText}
                layout="fill"
                objectFit="cover"
                priority={true}
            />

            <Box sx={styles.contentContainer}>
                <Grid sx={styles.content} container>
                    <Grid item>
                        <Typography sx={styles.title} variant={variant} component="h1">
                            {heading}
                        </Typography>
                    </Grid>
                    
                    <Grid item>
                        <Grid sx={styles.buttonContainer} container spacing={2}>
                            {links.map((link, i) => {
                                const { href, label, target } = link;

                                return (
                                    <Grid key={`hero-link-${i}`} sx={styles.button} item>
                                        <Link href={href} passHref>
                                            <Button target={target} color="primary" variant="contained">
                                                <Typography variant="button" display="block" noWrap>{label}</Typography>
                                            </Button>
                                        </Link>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default PamoHero;