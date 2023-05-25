// import React, { useEffect, useState } from 'react';
import {IoRestaurant} from "react-icons/io5";
import "./comingsoon.css";

const ComingSoon = () => {
    return (
        <>
        <div className="lounge">
        <div className="logo-cont">
                    <IoRestaurant className="the-logo" />
                </div>
                <div className="coming-soon-container">
                    <h2>OPENING SOON!!</h2>
                    <p className="top-p">Grand opening of Ghanian Grubs. Huge discounts for first 100 reservations.</p>
                    <hr/>
                </div>
                <div className="bottom"> </div>
            </div>
        </>
    )
}

export default ComingSoon




        