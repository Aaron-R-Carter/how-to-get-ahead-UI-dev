import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Stepper from "./Stepper";




export default function MyContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >

                <Stepper />
            </Container>
        </React.Fragment>
    );
}