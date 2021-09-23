import './ItemListContainer.css';
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
 
    return (
    <div className="container-items">
        <div className="item">
            item 1
            <p>{greeting}</p>
          
        </div>
        <div className="item">
            <ItemCount stock={10} initial={1} ></ItemCount>
        </div>
        <div className="item">
             <ItemCount></ItemCount>
        </div>
    </div>   
     )
}

export default ItemListContainer;