import React, { Component } from 'react';
import { header } from './conent';

export class Header extends Component {

    render() {
        const { projectName, author } = header;

        return (
            <nav className="navbar nav--fix-size card-1" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ta-project__nav-flex">
                    <a className="navbar-item ta-project__nav-header ta-project__font-responsive ta-project__font-black"
                        href="#">
                        {projectName}
                    </a>
                    <a className="navbar-item ta-project__nav-header-name ta-project__font-responsive ta-project__font-black"
                        href="https://panupong.dev" target="_blank">
                        {author}
                    </a>
                </div>
            </nav>
        );
    }
}