import express from "express"
import cors from "cors"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';

const app = express()
const PORT = 5000

// parse JSON request
app.use(express.json())
// enable CORS for all requests
app.use(cors())

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

app.get("/api/product/list", (req, res) => {
    // read the JSON file
    fs.readFile("./products.json", "utf-8", (err, jsonString_data) => {
        if(err){
            console.log("error while reading the JSON file", err)
        }
        else{
            try{
                const jsObject_data = JSON.parse(jsonString_data)
                res.status(201).json(jsObject_data)
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
    })
})

app.post("/api/product/add", (req, res) => {
    const product = req.body
    fs.readFile("./products.json", "utf-8", (err, jsonString_data) => {
        if(err){
            console.log("error while reading the JSON file", err)
        }
        else{
            try{
                const jsObject_data = JSON.parse(jsonString_data)
                product.id = uuidv4() // generate a unique id
                jsObject_data.push(product)
                fs.writeFile("./products.json", JSON.stringify(jsObject_data), err => {
                    if(err){
                        console.log("The error occurred while writing to the JSON file", err)
                    }else{
                        res.status(201).json(product)
                    }
                })
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
    })
})

app.put("/api/product/edit", (req, res) => {
    const product = req.body
    fs.readFile("./products.json", "utf-8", (err, jsonString_data) => {
        if(err){
            console.log("error while reading the JSON file", err)
        }
        else{
            try{
                const jsObject_data = JSON.parse(jsonString_data)
                const jsObject_dataEdit = jsObject_data.map((item) => {
                    return item.id === product.id ? product : item
                })
                fs.writeFile("./products.json", JSON.stringify(jsObject_dataEdit ), err => {
                    if(err){
                        console.log("The error occurred while writing to the JSON file", err)
                    }else{
                        res.status(201).json({
                            product: product,
                            product_id: product.id
                        })
                    }
                })
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
    })
})

app.delete("/api/product/delete/:id", (req, res) => {
    const productId = req.params.id
    fs.readFile("./products.json", "utf-8", (err, jsonString_data) => {
        if(err){
            console.log("error while reading the JSON file", err)
        }
        else{
            try{
                const jsObject_data = JSON.parse(jsonString_data)
                const jsObject_dataEdit = jsObject_data.filter((product) => {
                    return product.id != productId
                })
                fs.writeFile("./products.json", JSON.stringify(jsObject_dataEdit ), err => {
                    if(err){
                        console.log("The error occurred while writing to the JSON file", err)
                    }else{
                        res.status(201).json(jsObject_dataEdit)
                    }
                })
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
    })
})

app.get("/api/product/:id", (req, res) => {
    const productId = req.params.id
    fs.readFile("./products.json", "utf-8", (err, jsonString_data) => {
        if(err){
            console.log("error while reading the JSON file", err)
        }
        else{
            try{
                const jsObject_data = JSON.parse(jsonString_data)
                const product = jsObject_data.find((item) => {
                    return item.id === productId
                })
                res.status(201).json(product)
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
    })
})

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" })
})