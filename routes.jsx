import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { Furea } from "./Furea";

export function RoutesFurea(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Furea/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}