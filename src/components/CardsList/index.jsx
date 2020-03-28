import React, { Component, Fragment } from 'react';
import { Card } from '../Card';

export class CardsList extends Component {

    render() {
       return (
           <Fragment>
                <CardRow />
                <CardRow />
           </Fragment>
       );
    }
    
}

export class CardRow extends Component {

    render() {
        return (
            <div className="columns is-12-desktop">
                <Card />
                <Card />
            </div>
        );

    }
}