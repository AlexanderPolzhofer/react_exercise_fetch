import React from "react";

function Content(props) {
    return (<div>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <img src={props.image} alt="randomUserImage"></img>
    </div>);
}

export default Content;