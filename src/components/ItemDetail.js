import * as React from 'react';
import './ItemDetail.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from "../images/bolsapropla5.jpg";

const ItemDetail = (props) =>
{
    return (
            <>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                {props.detail.imagen}              
                <CardContent>
                    {/* <p> Id : {props.Id}</p>
                    <p> title : {props.title}</p>
                    <p> price : {props.price}</p>
                    <p> picture : {props.picture}</p> */}
                    <Typography gutterBottom variant="h5" component="div">
                    {props.detail.descripcion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.detail.precio}
                    </Typography>
                </CardContent>
            </>
        );
}

export default ItemDetail;