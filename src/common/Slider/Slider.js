import React from "react";
import * as url from "url";

const Slider = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <div style="background: linear-gradient(229.99deg, #11DEE9 -26%, #017E8B 145%);">
                    <h1>Snow in the desert</h1>
                    <p>Love, death & robots</p>
                </div>
                <div style="background: linear-gradient(215.32deg, #F90306 -1%, #9E0706 124%);">
                    <h1>Life Hutch</h1>
                    <p>Love, death & robots</p>
                </div>
                <div style="background: linear-gradient(221.87deg, #8308EA 1%, #5305AF 128%);">
                    <h1>Zima Blue</h1>
                    <p>Love, death & robots</p>
                </div>
                <div style="background: linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%);">
                    <h1>Automated Customer Service</h1>
                    <p>Love, death & robots</p>
                </div>
            </div>
            <div className="main-slide">
                <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80')`}}> </div>
                <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80')`}}> </div>
                <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`}}> </div>
                <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`}}> </div>
            </div>
            <div className="controls">
                <button className="down-button">
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button className="up-button">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider