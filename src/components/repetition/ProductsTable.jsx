import './ProductsTable.css'
import React from "react";
import products from "../../data/products";

export default () => {

    function getLines() {
        return products.map((product, i) => {
            return (
                <tr className={i % 2 == 0 ? 'pair' : 'odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>$ {product.price.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="product-table">
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
}