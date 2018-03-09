import React from 'react';
import { Link } from 'react-scroll';

import Toolbar from '../../containers/Toolbar/Toolbar';
import './Cover.css';

const cover = (props) => {
    return (
        <header className="Cover">
            <Toolbar click={props.drawerToggleClicked} linkScroll={props.linkClicked} />
            <div className="HeroTextBox">
                <h1>Bring Taste to<br />Your Wedding</h1>
                <Link className="btn" 
                  to="service" spy={true} duration={500} 
                  offset={-60}
                  style={{
                    padding: "10px 30px",
                    borderRadius: "16rem",
                    backgroundColor: "#94710F",
                    border: "1px solid #94710F",
                    color: "#fff",
                    cursor: "pointer"
                  }}
                  smooth={true}>知道更多</Link>
            </div>
        </header>
    );
}

export default cover;