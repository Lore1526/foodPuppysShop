import './ItemCount.css';
import Button from '@mui/material/Button';

const ItemCount = ( {stock, initial, onAdd}) =>{
    return (
        <>
          <div className="item-picture" ></div>
        <div className="item-footer">
            <div className="item-footer-carrito">
                <button className="item-footer-minus" onClick={ () => Decrease()}>-</button>
                <span className="item-number">{initial}</span>
                <button className="item-footer-plus" onClick={ () => AddStock()}>+</button>
            </div>
            <div className="item-footer-carrito">
                <Button mt={2} variant="text">Agregar Carrito</Button>
            </div>
        </div>
        </>
    );
}

export default ItemCount;


const Decrease = () =>{
  
    if (this.initial > this.stock){
        this.initial--;
    }
}

const AddStock = () =>{
  
    if (this.initial < this.stock){
        this.initial++;
    }
}