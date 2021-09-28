
import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = (props) =>
 {
    const task  = new Promise((resolve) =>
       { setTimeout(3000)});

    // task.then( res => {...})

    return (
        <div>
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
        </div>
     );
}




export default ItemList;