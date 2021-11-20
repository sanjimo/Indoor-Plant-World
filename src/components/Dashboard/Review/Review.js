import React from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const history = useHistory();
    const redirect_uri = '/';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch('https://murmuring-earth-87145.herokuapp.com/reviews', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{alert("Review Added Successfully!");
          reset();
          history.push(redirect_uri);});
    };

    return (
        <div>
            <Container sx={{mt:5, mb:8}}>
            <Typography sx={{textAlign: 'center', m:1, mb:3, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
                Add a review
            </Typography>
            <Card sx={{ boxShadow: 2, border: 0, m:2, p:5, width:'75%', mx:'auto'}}>
               <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input
                    className="input"
                    { ...register("name")}
                    defaultValue={user.displayName}
                    placeholder="Name"
                    />
                    <br />
                    <input
                    {...register("review", { required: true })}
                    type="text"
                    placeholder="Write Review"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("rating", { required: true })}
                    type="number"
                    placeholder="Rate out of 5"
                    className="input"
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{backgroundColor:'#900C3F', color:'white'}} type="submit" value="Confirm Submit" className="input" />
                </form>
            </Card>
        </Container>
        </div>
    );
};

export default Review;