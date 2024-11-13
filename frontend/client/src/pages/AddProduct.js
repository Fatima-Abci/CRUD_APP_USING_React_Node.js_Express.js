import React, { useState } from "react"
import Button from "../components/Button.js"
import Input from "../components/Input.js"
import { useNavigate } from "react-router-dom"

export default function AddProduct(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        id:"", name: "", price:"", category: ""
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
            const response = await fetch("/api/product/add", {
                method: "POST",
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
        <div className="div-container"> 
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
                            text="Add Product"
                            type="submit"
                        />
                    </div>
            </form>
        </div>
    )
}