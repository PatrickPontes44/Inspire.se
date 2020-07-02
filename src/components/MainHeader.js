import React, { Component } from 'react'
import { FiZap } from 'react-icons/fi';


export class MainHeader extends Component {
    render() {
        return (
            <header className="main-header">
                <h2>Inspire.se</h2>
                <a href="#start-proj" className="button" style={{backgroundColor: '#2980b9'}}>
                    Start App <FiZap />
                    </a>

            </header>
        )
    }
}

export default MainHeader
