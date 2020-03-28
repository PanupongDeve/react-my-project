import React, { Component } from 'react';
import { TagsList } from '../TagsList';

export class Card extends Component {

    render() {
        const { project } = this.props;
    
        const {
            title,
            projectURL,
            tags
        } = project;

        return (
            <div className="column is-6">
                <article className="message is-primary card-1">
                    <div className="message-header">
                        <p>{title}</p>
                        <a href={projectURL} target="_blank"><i className="fas fa-desktop"></i></a>
                    </div>
                    <div className="message-body">
                        <div className="ta-project__card-body">
                            <div class="ta-card-img__container">
                                <a href={projectURL} target="_blank">
                                    <figure class="image ta-card-img__figture">
                                        <img src={projectURL} />
                                    </figure>
                                </a>
                            </div>
                            <div className="ta-detail__container">
                                <TagsList tags={tags} />
                                <a href={projectURL} target="_blank" className="button is-info ta-button__full ta-button__top">Watch</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        );

    }
}