import React from 'react';
export default function Hello(props) {
    return (
        <h1>Hey { (props.name) ? props.name : "Stranger" }!</h1>
    );
}