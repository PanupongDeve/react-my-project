import React, { Component } from 'react';
import { CardsList } from '../CardsList';


export class Body extends Component {

    render() {
        
        
        return (
            <div className="ta-project__app">
               <CardsList />
            </div>
        )
    }
}