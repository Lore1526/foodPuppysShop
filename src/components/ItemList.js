
import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = (props) =>
 {
    return (
        <>
          {
            props.items.map(item => 
                <Item
                    key = {item.id}
                    Id={item.id}
                    title={item.title}
                    price={item.price}
                    picture={item.picture}
                />

              )
          }
        </>
     );
}




export default ItemList;