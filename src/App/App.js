import React, { Component } from 'react';
import Welcome from '../Welcome/welcome';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                </header>
                <Welcome />
            </div>
        );
    }
}

export default App;