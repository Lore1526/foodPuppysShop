import './ItemCount.css';
import React, {  useState } from "react";
import Button from '@mui/material/Button';

const ItemCount = ( {stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial); 
  //  const [stockInternal, setStockInternal] = useState(stock); 
    
    const decreaseStock = () =>{
        if(contador >= initial ){
            setContador(contador + 1);
        }
    }

    const addStock = () =>{
        if (contador > initial ){
            setContador(contador - 1);
         //   setStockInternal(stock +1);
        }
    }
    
    return (
        <>
            <div className="item-picture" ></div>
            <div className="item-footer">
                <div className="item-footer-carrito">
                    <Button l={2} className="item-footer-minus" variant="outlined" onClick={ () => addStock()}>-</Button>
                    <span className="item-number">{contador}</span>
                    <Button m={2} className="item-footer-plus"  onClick={ () => decreaseStock()} variant="outlined">+</Button>
                </div>
                <div className="item-footer-carrito">
                    <Button className="item-agregar-carrito" variant="outlined">Agregar Carrito</Button>
                </div>
            </div>
        </>
    );

}


export default ItemCount;


