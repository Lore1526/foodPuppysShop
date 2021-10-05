import * as React from 'react';
import './ItemDetailContainer.css';
import { useState,useEffect } from 'react';
import ItemDetail  from './ItemDetail';



const ItemDetailContainer = (props) =>
{
    const [itemDetail, setItemsDetail] = useState({});

    useEffect(() => {
        const itemDetailDummy = 
        {
            id:"1",
            descripcion:"Pro Plan Adultos", 
            imagen:"https:/www.imagen.dummy",
            precio: 4000
        };
    
        const getItemsDetail = new Promise((resolve) => {
          setTimeout(() => {
            resolve(itemDetailDummy);
          }, 2000);
        });

        getItemsDetail.then((res) => {
          setItemsDetail(res);
        });
      }, []);

    return (
            <>
               <ItemDetail detail={itemDetail} ></ItemDetail>
            </>
        );
}

export default ItemDetailContainer;