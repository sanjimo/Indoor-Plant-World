import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExtraSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <>
    <Typography sx={{textAlign:'center', m:1, mt:2, mb:4, color:"#900C3F", fontWeight: 700}} variant="h4" gutterBottom>Grow With Us!</Typography>
    <Card sx={{ maxWidth: 600, minWidth: 150, mx:'auto', mt: 5, mb:8}}>
      <CardHeader
         sx={{ color:"#900C3F"}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Grow With Us"
        subheader="September 20, 2015"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://i.ibb.co/0XH8Mzg/Indoor-houseplants-next-to-a-window-in-a-beautifully-designed-home-or-flat-interior.jpg"
        alt="indoor-tree"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ color:"#900C3F"}}>Be part of the Indoor Plant World!</Typography>
          <Typography paragraph  sx={{ color:"#900C3F"}}>
              We are excited to be hiring team members for our main facility at our headquaters in Dhaka.
          </Typography>
          <Typography paragraph  sx={{ color:"#900C3F"}}>
              You may submit your resume to info@indoor_plant_world.com.
          </Typography>
          <Typography paragraph  sx={{ color:"#900C3F"}}>
              Current available positions :
              1. Warehouse Operations Manager
              2. Fulfillment Team Manager
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}
