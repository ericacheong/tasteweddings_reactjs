import React, { Component } from 'react';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Logo from '../../components/Logo/Logo';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.css';

class toolbar extends Component {
    state = {
        top: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if (window.scrollY < 500) {
            this.setState({ top: true});
        } else {
            this.setState({top: false});
        }
    }


    render() {
        let attachedClass = "Toolbar Fixed";
        if (this.state.top) {
            attachedClass = "Toolbar Relative";
        }
        return (
            <div className={attachedClass}>
                <div className="LogoContainer">
                    <Logo />
                </div>
                <nav className="DesktopOnly">
                    <NavigationItems clickHandler={this.props.linkScroll} />
                </nav>
                <DrawerToggle clicked={this.props.click}/>
            </div>

        )
    }
}
 
export default toolbar;