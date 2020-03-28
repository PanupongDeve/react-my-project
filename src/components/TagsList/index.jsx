import React, { Component, Fragment } from 'react';



export class Tag extends Component {
    render() {
        return (
            <span className="tag tag__container is-warning"><b>JSX</b></span>
        );
    }
}


export class TagsList extends Component {
    render() {
        return (
            <div>
                <Tag />
                <Tag />
            </div>
        );
    }
}