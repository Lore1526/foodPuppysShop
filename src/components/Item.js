import * as React from 'react';

const Item = (props) =>
{
    return (
            <>
                <p> Id : {props.Id}</p>
                <p> title : {props.title}</p>
                <p> price : {props.price}</p>
                <p> picture : {props.picture}</p>
            </>
        );
}

export default Item;