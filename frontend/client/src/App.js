import React from "react"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import RootLayout from "./components/RootLayout.js"
import Home from "./pages/Home.js"
import AllProducts from "./pages/AllProducts.js"
import AddProduct from "./pages/AddProduct.js"
import EditProduct from "./pages/EditProduct.js"
import ViewProduct from "./pages/ViewProduct.js"
import NotFound from "./pages/NotFound.js"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/list" element={<AllProducts />}></Route>
            <Route path="/product/add" element={<AddProduct />}></Route>
            <Route path="/product/edit" element={<EditProduct />}></Route>
            <Route path="/product/:id" element={<ViewProduct />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Route>
    )
)

export default function App(){
    return(
            <RouterProvider router={router}/>
    )
}