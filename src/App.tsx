import React from 'react';
import "./index.css"

import {Home} from "./pages/home";
import {Routes, Route} from "react-router-dom";
import {Masters} from "./pages/masters";
import {Layout} from "./components/Layout";

export const routes = {
    home: "/",
    masters: "/masters",
    about: "/about",
}
export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path={routes.home} element={<Home/>} />
                    <Route path={routes.masters} element={<Masters/>} />
                </Routes>
            </Layout>
        </>
    );
}

