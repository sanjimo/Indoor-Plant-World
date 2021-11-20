import React, {useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router';
import { useForm } from "react-hook-form";
import usePlants from '../../../hooks/usePlants';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './BookPlants.css';


const BookPlants = () => {
    const {plantId} = useParams();
    const [plants] = usePlants();
    const [details, setDetails]= useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/dashboardPage';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();


    useEffect(()=>{
        const matchPlant = plants.find(singlePlant=>singlePlant._id===plantId);
        setDetails(matchPlant);
    },[plantId,plants]);


    const onSubmit = (data) => {
        data.status= "Pending";
        fetch('https://murmuring-earth-87145.herokuapp.com/bookingPlants', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              alert("Booked Successfully!");
              reset();
              history.push(redirect_uri);
        });
    };

    return (
        <>
        <Navigation/>
        <Container sx={{mt:5, mb:8}}>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{mt:5, mb:8}}  columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={6} >
            <Typography sx={{textAlign: 'center', m:1, mb:3, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
               Plant Details
            </Typography>
            <Card sx={{ minWidth: 260 , mx:'auto', maxWidth: 350, boxShadow: 2, border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={details?.img}
                alt={details?.title}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
                        {details?.title}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#BC5131", fontWeight:"500"}} variant="body1" component="div" >
                        {details?.details}
                    </Typography>
                    <Typography sx={{textAlign: 'center',   color:"#BC5131", fontWeight:'700'}} variant="body2" component="div" >
                       Size : {details?.size}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#900C3F", fontWeight:'700'}}  variant="body2" component="div" >
                        Price : {details?.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4} sm={8} md={6} >
        <Typography sx={{textAlign: 'center', m:1, mb:3, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
               Booking Form
            </Typography>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {
                details?.title &&  <input
                className="input"
                {...register("title")}
                defaultValue={details?.title}
                placeholder="Title"
                />
                }
                <br />
                <input
                className="input"
                {...register("name")}
                defaultValue={user.displayName}
                placeholder="Name"
                />
                <br />
                <input
                className="input"
                {...register("email")}
                defaultValue={user.email}
                placeholder="Email"
                />
                <br />
                {
                details?.price &&  <input
                className="input"
                {...register("price")}
                defaultValue={details?.price}
                placeholder="Price"
                />
                }
                <br/>
                <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Address"
                className="input"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input style={{backgroundColor:'#900C3F', color:'white'}} type="submit" className="input" value="Confirm Booking"/>
            </form>
        </Grid>
    </Grid>
    </Container>
    <Footer/>
    </>
    )

};

export default BookPlants;