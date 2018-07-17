import React from 'react';


//function style comonent

/*
can get one parameter - that is injected by react
(will get all the attribute that we added to the tag)
*/

/*
props.children - is a built in keyword to access the 
content between the opening tag and the closing tag
*/
const pizza = ( p ) => {


    //onClick={props.discount} - DONT ADD () !!!
    return (
        <div>
            <p>Pizza price: {p.price} </p>
            <p>Num of slices: {p.slices} </p>
            <p>{p.children}</p>
            <button onClick={p.discount.bind(this,p.num,0.8)}>get discount 1</button>
            <button onClick={()=>p.discount(p.num,0.8)}>get discount 2</button>
            <hr/>
        </div>
    )
};

export default pizza;