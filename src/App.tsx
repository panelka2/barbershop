import React from 'react';
import "./index.css"
import {Home} from "./pages/home";
import {Routes, Route} from "react-router-dom";
import {Masters} from "./pages/masters";
import {Layout} from "./components/Layout";
import {About} from "./pages/about";
import {News} from "./pages/news"

export const routes = {
    home: "/",
    masters: "/masters",
    about: "/about",
    news: "/news",
}
export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path={routes.home} element={<Home/>} />
                    <Route path={routes.masters} element={<Masters/>} />
                    <Route path={routes.about} element={<About/>}/>
                    <Route path={routes.news} element={<News/>}/>
                </Routes>
            </Layout>
        </>
    );
}

