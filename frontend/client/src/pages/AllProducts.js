import React, { useState, useEffect } from "react"
import Table from "../components/Table.js"
import { useNavigate } from "react-router-dom"

export default function AllProducts(){
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    const handleEdit = (product) => {
        navigate("/product/edit", {
            state: { product }
        })
    }

    const handleDelete = async (productId) => {
        try{
            const response = await fetch(`/api/product/delete/${productId}`, {
                method: "DELETE"
            })
            const jsObject_response = await response.json()
            setProducts(jsObject_response)
        }catch(err){
            console.log(err)
        }
    }

    const handleView = async (productId) => {
        try{
            const response = await fetch(`/api/product/${productId}`)
            const product = await response.json()
            navigate(`/product/${productId}`, {
                state: { product }
            })
        }catch(err){
            console.log(err)
        }
    }

    const fetchProducts = async () => {
            try{
                const response = await fetch("/api/product/list")
                const jsObject_response = await response.json()
                setProducts(jsObject_response)
            }catch(err){
                console.log(err)
            }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return(
        <div className="div-container">
            <Table 
                data= {products}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleView={handleView}
            />
        </div>
    )
}