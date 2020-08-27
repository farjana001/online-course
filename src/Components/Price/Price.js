import React from 'react';
import './Price.css';

const Price = (props) => {
    const price = props.price;
    
    const total = price.reduce((total, fee) => total + fee.price ,0);

    // console.log(price);
    return (
        <div className='price-container'>
            <h4>Total: {price.length}</h4>
    <h5>Price: {total}</h5>
        </div>
    );
};

export default Price;