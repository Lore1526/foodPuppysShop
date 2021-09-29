import './ItemCount.css';
import React, {  useState } from "react";
import Button from '@mui/material/Button';

const ItemCount = ( {stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial); 
    
    const IncreaseCountHandler = () =>{
        if(contador >= initial ){
            setContador(contador + 1);
        }
    }

    const DecreaseCountHandler = () =>{
        if (contador > initial ){
            setContador(contador - 1);
        }
    }
    
    return (
        <>
            <div >
                <div >
                    <Button l={2}  variant="outlined" onClick={ () => DecreaseCountHandler()}>-</Button>
                    <span >{contador}</span>
                    <Button m={2}   onClick={ () => IncreaseCountHandler()} variant="outlined">+</Button>
                </div>
                <div >
                    <Button  variant="outlined">Agregar Carrito</Button>
                </div>
            </div>
        </>
    );

}


export default ItemCount;


