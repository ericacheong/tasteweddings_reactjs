import React, { Component } from 'react';
import { scroller } from 'react-scroll';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Cover from '../../components/Cover/Cover';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }


    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleClickedHandler = () => {
        this.setState({showSideDrawer: true});
    }


    openLinkAndCloseSideDrawerHandler = (element) => {
        scroller.scrollTo(element, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <Aux>
                <Cover drawerToggleClicked={this.drawerToggleClickedHandler} linkClicked={this.openLinkAndCloseSideDrawerHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                    openLinkAndCloseSideDrawerHandler={this.openLinkAndCloseSideDrawerHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;