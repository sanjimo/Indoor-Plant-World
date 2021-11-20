import React from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import './AddProduct.css';


const AddProduct = () => {
    const history = useHistory();
    const redirect_uri = '/explorePlants';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();


    const onSubmit = (data) => {

        fetch('https://murmuring-earth-87145.herokuapp.com/plants', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{alert("Product Added Successfully!");
          reset();
          history.push(redirect_uri);});
    };


    return (
        <div>
        <Container sx={{mt:5, mb:8}}>
           <Typography sx={{textAlign: 'center', m:1, mb:3, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
                Add a new product
            </Typography>
            <Card sx={{ boxShadow: 2, border: 0, m:2, p:2}}>
               <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input
                    {...register("title")}
                    placeholder="Title"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("img")}
                    type="url"
                    placeholder="Image URL"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("details")}
                    type="text"
                    placeholder="Details"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("size")}
                    type="text"
                    placeholder="Size"
                    className="input"
                    />
                    <br />
                    <input
                    {...register("price")}
                    placeholder="Price in BDT"
                    className="input"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{backgroundColor:'#900C3F', color:'white'}} type="submit" value="Confirm Submit" className="input" />
                </form>
            </Card>
        </Container>
        </div>
    );
};

export default AddProduct;