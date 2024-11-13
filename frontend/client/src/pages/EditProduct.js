import React, { useState } from "react"
import Button from "../components/Button.js"
import Input from "../components/Input.js"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function EditProduct(){
    const location = useLocation()
    const product = location.state.product
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: product.id, name: product.name, price: product.price, category: product.category
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return({
                    ...prevFormData,
                    [name]: value
            })
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const productData = { ...formData, price: parseFloat(formData.price) };
        try{
            const response = await fetch("/api/product/edit", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            })
    
            const jsObject_response = await response.json()
            setFormData({
                id:"", name: "", price:"", category: ""
            })
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Name"
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <Input 
                        placeholder="Price"
                        type="text"
                        value={formData.price}
                        name="price"
                        onChange={handleChange}
                    />
                    <Input 
                        placeholder="Category"
                        type="text"
                        value={formData.category}
                        name="category"
                        onChange={handleChange}
                    />
                    <div className="form__btn">
                        <Button 
                            text="Edit Product"
                            type="submit"
                        />
                    </div>
            </form>
        </div>
    )
}