import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


const ExplorePlant = (props) => {
    const {title,details,img,size,price, _id} = props.plant;
    //console.log(props.plant)
    return(
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 260 , maxWidth: 350, boxShadow: 2, border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={img}
                alt={title}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#BC5131", fontWeight:"500"}} variant="body1" component="div" >
                        {details}
                    </Typography>
                    <Typography sx={{textAlign: 'center',   color:"#BC5131", fontWeight:'700'}} variant="body2" component="div" >
                       Size : {size}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#900C3F", fontWeight:'700'}}  variant="body2" component="div" >
                        Price : {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={`/bookPlants/${_id}`}  style={{ textDecoration: 'none', margin:'auto' }}>
                        <Button  variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"#900C3F"}}>Book Now</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ExplorePlant;