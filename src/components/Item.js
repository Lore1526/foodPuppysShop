import * as React from 'react';
import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../images/bolsapropla5.jpg";
import ItemDetailContainer from './ItemDetailContainer';

const Item = (props) =>
{
    return (
            <>
               <div className="item">
                <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                                    
                    <CardContent>
                        <p> Id : {props.Id}</p>
                        <p> title : {props.title}</p>
                        <p> price : {props.price}</p>
                        <p> picture : {props.picture}</p>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent> */}
                    <ItemDetailContainer/>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    <ItemCount stock={10} initial={1}></ItemCount>
                </Card>
              </div>
            </>
        );
}

export default Item;