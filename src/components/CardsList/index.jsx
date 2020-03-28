import React, { Component, Fragment } from 'react';
import { Card } from '../Card';
import { projectRepository  } from '../../repositories/projectRepository';
export class CardsList extends Component {
    renderProjectCard = () => {
        const projects = projectRepository.getProjectsForUI();
        return projects.map((project, index) => {
            return (
                <CardRow project={project} key={index} />
            );
        })
    }

    render() {
        
       return (
           <Fragment>
                { this.renderProjectCard() }
           </Fragment>
       );
    }
    
}

export class CardRow extends Component {

    render() {
        const { project } = this.props;
    
        return (
            <div className="columns is-12-desktop">
                <Card project={project[0]} />
                <Card project={project[1]} />
            </div>
        );

    }
}