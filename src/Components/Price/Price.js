import React from 'react';
import './Price.css';



const Price = (props) => {
    const price = props.price;
    
    // calculation course price
    const total = price.reduce((total, fee) => total + fee.price ,0);
    let discount = 0;

    // condition of discount
    if(price.length > 1){
        discount = (10 / 100) * total;
    }
    const grandTotal = total - discount;

    // formatting fraction number
    const formatNumber = num => {
        const fixedNum = num.toFixed(0);
        return Number(fixedNum);
    }

    // displaying order summery
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
            
            <div>
                {
                    price.map(course => {
                        return (
                            <div className='course-box mt-5'>
                                <h4>{course.name} : ${course.price}</h4>
                                <img src={course.picture} alt=""/>
                                <div className="d-flex justify-content-between p-1">
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='place-button px-3 py-1'>Place your Order</button>
        </div>
    );
};

export default Price;