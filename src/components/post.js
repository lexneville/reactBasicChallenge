import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <div class="postTop">
                <img class="image" src={props.image}  alt="missing image"/>
                <h1 class="description"> {props.description}</h1>
            </div>
        </div>
    )
}