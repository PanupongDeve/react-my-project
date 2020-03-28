import React, { Component } from 'react';
import { CardsList } from '../CardsList';
import { projectRepository  } from '../../repositories/projectRepository';

export class Body extends Component {

    render() {
        const projects = projectRepository.getProjectsForUI();
        console.log(projects);
        return (
            <div className="ta-project__app">
               <CardsList />
            </div>
        )
    }
}