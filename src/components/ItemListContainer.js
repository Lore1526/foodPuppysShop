import './ItemListContainer.css';
import ItemList  from './ItemList';
import { useState,useEffect } from 'react';

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
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
        ];
    
        const getItems = new Promise((resolve) => {
          setTimeout(() => {
            resolve(itemsDummy);
          }, 2000);
        });

        getItems.then((res) => {
          setItems(res);
        });
      }, []);
 
    return (
    <div className="container-items">
        <ItemList  items={items}></ItemList>
    </div>   
     )
}

export default ItemListContainer;