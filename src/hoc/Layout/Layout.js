import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Cover from '../../components/Cover/Cover';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        stickyToolbar: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleClickedHandler = () => {
        this.setState({showSideDrawer: true});
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;
        console.log(scrollTop);
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