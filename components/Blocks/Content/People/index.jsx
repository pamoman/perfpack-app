/*
 * Content Block - People
 */

import PersonCard from './PersonCard';
import { Grid } from '@mui/material';

export {
    PersonCard
};

const PamoPeople = ({ people, userSettings }) => {
    return (
        <Grid container spacing={4} justifyContent="flex-start">
            {people.map((person, i) => {
                return (
                    <Grid key={`staff-card-${i}`} item xs={12} md={6}>
                        <PersonCard person={person} userSettings={userSettings} />
                    </Grid>
                )
            })}
        </Grid>
    )
};

export default PamoPeople;