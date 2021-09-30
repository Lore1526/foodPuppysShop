import * as React from 'react';
import './ItemDetailContainer.css';
import { useState,useEffect } from 'react';
import ItemDetail  from './itemDetail';



const ItemDetailContainer = (props) =>
{
    const [itemDetail, setItemsDetail] = useState([]);

    useEffect(() => {
        const itemDetailDummy = [
        {
            descripcion:"Pro Plan Adultos", 
            imagen:"1",
            precio:"$4000"
        }
        ];
    
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