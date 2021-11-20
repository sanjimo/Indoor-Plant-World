import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import image from '../../images/404.png';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


export default function NotFound() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm" sx={{mt:5}}>
            <Grid item xs={12} md={12}>
                <img style={{ width: '100%' }} src={image} alt="404" />
            </Grid>
            <NavLink
                style={{ textDecoration: 'none' }}
                to="/home">
                <Button variant="contained">Back to Home</Button>
            </NavLink>
        </Container>
    </React.Fragment>
  );
}