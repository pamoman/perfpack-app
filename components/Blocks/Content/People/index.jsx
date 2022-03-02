/*
 * Content Block - People
 */

import PersonCard from './PersonCard';
import { Grid } from '@mui/material';

const Component = ({ people, userSettings }) => {
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

const People = (data) => {
    const { people, settings: peopleSettings } = data;

    const props = {
        people,
        userSettings: peopleSettings
    };

    return (
        <Component {...props} />
    )
};

const Staff = (data) => {
    const { employees, settings: staffSettings } = data;

    const staff = employees.map(employee => employee?.users_permissions_user?.data?.attributes || {});

    const props = {
        people: staff,
        userSettings: staffSettings,
    };

    return (
        <Component {...props} />
    )
};

export {
    People,
    Staff,
    PersonCard
};