import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UpdateProductPage from './UpdateProduct';

const ProductPage = ({ products, removeProduct }) => {

    const onHandleRemove = (id) => {
        console.log("Product: ", id);
        removeProduct(id)
    }

    return (
        <div>
            <Link to={`/admin/product/add`}><button>Add New Product</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                                    <button><Link to={`/admin/product/update/${item.id}`}>Update</Link></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage