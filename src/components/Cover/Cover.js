import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Cover.css';

const cover = (props) => {
    return (
        <header className="Cover">
            <Toolbar click={props.drawerToggleClicked} />
            <div className="HeroTextBox">
                <h1>Bring Taste to<br />Your Wedding</h1>
                <a className="btn" href="#">知道更多</a>
            </div>
        </header>
    );
}

export default cover;