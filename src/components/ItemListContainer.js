import './ItemListContainer.css';
import ItemCount from './ItemCount';
import Item from './Item';
import ItemList  from './ItemList';

const itemsDummy = [
    {
        id : "1",
        price : "$900",
        title : "The best picture 1",
        picture : "hhp//dummy.picture1",
    },
    {
        id : "2",
        price : "$900",
        title : "The best picture 2",
        picture : "hhp//dummy.picture2",
    },
    {
        id : "3",
        price : "$900",
        title : "The best picture 3",
        picture : "hhp//dummy.picture3",
    } 

]


const ItemListContainer = ({greeting}) => {
 
    return (
    <div className="container-items">
        <div className="item">
            <ItemList items={itemsDummy}></ItemList>
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