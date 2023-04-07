import React from "react";
import "./iconButton.scss";
import { Link } from "react-router-dom";

const IconButton = () => {
    return (
        <Link to="/">
            <button className="icon-button">
                <img src="/images/left-arrow.svg" alt="left arrow" />
            </button>
        </Link>
    );
};

export default IconButton;
