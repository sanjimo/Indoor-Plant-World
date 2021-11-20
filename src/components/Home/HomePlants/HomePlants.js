import React from 'react';
import {useEffect,useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ExplorePlant from '../../ExplorePlant/ExplorePlant';

const HomePlants = () => {
    const [fixedPlants, setFixedPlants] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-earth-87145.herokuapp.com/fixedPlants')
       .then(res => res.json())
       .then(result => {
        setFixedPlants(result.plants)
       });
     }, []);

    return (
        <div>
            <Container sx={{ mt: 3, mb: 8 }} >
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:5, mt:2, color:"#900C3F"}} variant="h4" component="div">
                 Our Plants
                </Typography>
                <Grid container spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      fixedPlants.map(plant=><ExplorePlant key={plant._id} plant={plant}></ExplorePlant>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default HomePlants;