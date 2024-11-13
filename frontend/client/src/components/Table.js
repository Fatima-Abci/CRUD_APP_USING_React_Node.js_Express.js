import React from "react"
import Button from "./Button.js"

export default function Table(props){
    return(
        <table className="table">
            <thead className="table__thead">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data?.map((product, index) =>(
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <div className="div-btn">
                                    <Button 
                                        text="View"
                                        onClick={() => props.handleView(product.id)}
                                        type="button"
                                        className="btn-view"
                                    />
                                    <Button 
                                        text="Edit"
                                        onClick={() => props.handleEdit(product)}
                                        type="button"
                                        className="btn-edit"
                                    />
                                    <Button 
                                        text="Delete"
                                        onClick={() => props.handleDelete(product.id)}
                                        type="button"
                                        className="btn-delete"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}