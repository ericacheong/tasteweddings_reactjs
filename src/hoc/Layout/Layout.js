import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Cover from '../../components/Cover/Cover';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        stickyToolbar: false
    }


    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleClickedHandler = () => {
        this.setState({showSideDrawer: true});
    }


    render() {
        return (
            <Aux>
                <Cover drawerToggleClicked={this.drawerToggleClickedHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;