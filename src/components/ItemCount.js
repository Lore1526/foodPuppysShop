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
            <div className="item-picture" ></div>
            <div className="item-footer">
                <div className="item-footer-carrito">
                    <Button l={2} className="item-footer-minus" variant="outlined" onClick={ () => DecreaseCountHandler()}>-</Button>
                    <span className="item-number">{contador}</span>
                    <Button m={2} className="item-footer-plus"  onClick={ () => IncreaseCountHandler()} variant="outlined">+</Button>
                </div>
                <div className="item-footer-carrito">
                    <Button className="item-agregar-carrito" variant="outlined">Agregar Carrito</Button>
                </div>
            </div>
        </>
    );

}


export default ItemCount;


