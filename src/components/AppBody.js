import React, { Component } from 'react';
import IdeaGenerator from './IdeaGenerator';

export class AppBody extends Component {
    render() {
        return (
            <div className="app-body" id="start-proj">
                <IdeaGenerator />
            </div>
        )
    }
}

export default AppBody
