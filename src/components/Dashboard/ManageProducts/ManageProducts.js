import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import usePlants from '../../../hooks/usePlants';


const ManageProducts = () => {
    const [plants] = usePlants([]);

    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete product?');
        if(confirm){
            fetch(`https://murmuring-earth-87145.herokuapp.com/plants/${id}`, {
               method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                   alert('Product deleted!')
                }
            })
        }
    }

    return (
        <Container sx={{ mt: 5, mb: 8 }} >
        <Typography sx={{fontWeight: 700, textAlign: 'center', mb:2, mt:2, color:"#900C3F"}} variant="h4" component="div">
           Manage all Products
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            plants.map(plant=><Grid item xs={4} sm={4} md={4} key={plant?._id}>
                <Card sx={{ minWidth: 260 , maxWidth: 350, boxShadow: 2, border: 0}}>
                <CardMedia
                component="img"
                style={{height: '260px', margin: 'auto'}}
                image={plant?.img}
                alt={plant?.title}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', m:1, color:"#900C3F", fontWeight:'700'}} variant="h5" component="div">
                            {plant?.title}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#BC5131", fontWeight:"500"}} variant="body1" component="div" >
                            {plant?.details}
                    </Typography>
                    <Typography sx={{textAlign: 'center',   color:"#BC5131", fontWeight:'700'}} variant="body2" component="div" >
                           Size : {plant?.size}
                    </Typography>
                    <Typography sx={{textAlign: 'center',  color:"#900C3F", fontWeight:'700'}}  variant="body2" component="div" >
                            Price : {plant?.price}
                        </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>handleDelete(plant?._id)} variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"#900C3F"}} startIcon={<DeleteIcon />}>Delete</Button>
                </CardActions>
              </Card>
              </Grid>
            )
        }
        </Grid>
        </Container>
    )
};

export default ManageProducts;