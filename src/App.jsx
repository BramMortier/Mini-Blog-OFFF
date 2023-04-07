import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Homepage, PostDetailPage } from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Homepage />} />
                <Route path="/post/:slug" element={<PostDetailPage />} />
            </Route>
        </Routes>
    );
}

export default App;
