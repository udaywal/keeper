import React from "react";

function Card (props) {
    return (
        <div className="d-flex flex-row align-items-center note">
            <div>
                <img src={props.img} style={{ width:"70px", height:"70px", paddingRight:"10px" }} />
            </div>
            <div className="d-flex flex-column">
                <h4>{props.name}</h4>
                <span className="text-muted" style={{fontSize:"small"}}>Tel: {props.tel}</span>
                <span className="text-muted" style={{fontSize:"small"}}>Email: {props.email}</span>
            </div>
        </div>
    );
}

export default Card;