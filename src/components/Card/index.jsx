import React, { Component } from 'react';
import { TagsList } from '../TagsList';

export class Card extends Component {

    render() {
        return (
            <div className="column is-6">
                <article className="message is-primary card-1">
                    <div className="message-header">
                        <p>Test</p>
                        <a href="https://google.com" target="_blank"><i className="fas fa-desktop"></i></a>
                    </div>
                    <div className="message-body">
                        <div className="ta-project__card-body">
                            <div class="ta-card-img__container">
                                <a href="https://google.com" target="_blank">
                                    <figure class="image ta-card-img__figture">
                                        <img src="https://google.com" />
                                    </figure>
                                </a>
                            </div>
                            <div className="ta-detail__container">
                                <TagsList />
                                <a href="https://google.com" target="_blank" className="button is-info ta-button__full ta-button__top">Watch</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        );

    }
}