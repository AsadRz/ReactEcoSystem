import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout';

const App = () => 
{
    return (
        <React.Fragment>
            <Layout />
        </React.Fragment>
    );
}

export default hot(module)(App);