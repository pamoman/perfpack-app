/* 
 * Page 2
 */

import React from "react";
import { initializeApollo, addApolloState } from '@config/client';
import { useQuery } from '@apollo/client';
import { Main } from '@components/Global';
import { PamoBlockController } from '@components/Blocks';
import { Typography } from '@mui/material';

const Page2 = () => {
    const seo = {};
    const blocks = [];

    return (
        <Main seo={seo}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>Page 2</Typography>
            {blocks && <PamoBlockController blocks={blocks} /> }
        </Main>
    )
};

export const getStaticProps = async (ctx) => {
    const apolloClient = initializeApollo();

    /* await apolloClient.query({ query: START }); */
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default Page2;