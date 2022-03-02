/*
 * Content Block - Wysiwyg
 */

import ReactMarkdown from 'react-markdown';
import { Grid } from '@mui/material';

const Component = ({ content }) => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <ReactMarkdown
                    children={content}
                ></ReactMarkdown>
            </Grid>
        </Grid>
    )
};

const Wysiwyg = (data) => {
    const { content } = data;

    const props = {
        content
    };

    return (
        <Component {...props} />
    )
};

export default Wysiwyg;