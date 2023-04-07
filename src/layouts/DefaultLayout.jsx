import React from "react";
import { Outlet } from "react-router-dom";
import "./defaultLayout.scss";

const DefaultLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default DefaultLayout;
