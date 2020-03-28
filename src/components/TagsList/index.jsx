import React, { Component, Fragment } from 'react';
import { utilsHelpers } from '../../helpers';


export class Tag extends Component {
    render() {
        const { tag } = this.props;
        const {
            title,
            color
        } = tag;
       
        return (
            <span className={`tag tag__container is-${utilsHelpers.getColorTagByColor(color)}`}><b>{title}</b></span>
        );
    }
}

export class TagsList extends Component {

    renderTag = () => {
        const { tags } = this.props;
        return tags.map((tag, index) => {
            return <Tag tag={tag} key={index} />
        });
    }

    render() {
        return (
            <div>
               {this.renderTag()}
            </div>
        );
    }
}