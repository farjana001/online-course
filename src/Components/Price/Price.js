import React from 'react';
import './Price.css';

const Price = (props) => {
    const price = props.price;

    const total = price.reduce((total, fee) => total + fee.price ,0);
   
    let discount = 0;
    if(price.length > 1){
        discount = (10 / 100) * total;
    }
    const grandTotal = total - discount;
    const formatNumber = num => {
        const fixedNum = num.toFixed(2);
        return Number(fixedNum);
    }
    return (
        <div className='price-container mt-3 ml-3'>
            <h4>Order Summery</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Course Item : </td>
                        <td>{price.length}</td>
                    </tr>
                    <tr>
                        <td>Course Fee : </td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td>Discount : </td>
                        <td>${formatNumber(discount)}</td>
                    </tr>
                </tbody>
            </table>
            <h5>Order Total : ${formatNumber(grandTotal)}</h5>
        </div>
    );
};

export default Price;