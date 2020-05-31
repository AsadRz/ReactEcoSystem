import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';
import { Paper } from '@material-ui/core';

const Layout = (props) =>
{
    return (
        <div>
            <Paper
                elevation={0}
                style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
            >
                <Header />
                <MainContent />
                {props.children}
            </Paper>

            {/* <Footer />  */}
        </div>
    );
}

export default Layout;