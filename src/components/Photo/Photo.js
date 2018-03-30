import React from 'react';

import photo01 from '../../assets/images/JK_01.jpg';
import photo02 from '../../assets/images/JK_02.jpg';
import photo03 from '../../assets/images/JK_03.jpg';
import photo04 from '../../assets/images/JK_04.jpg';
import photo05 from '../../assets/images/JK_05.jpg';
import photo06 from '../../assets/images/JK_06.jpg';
import photo07 from '../../assets/images/JK_07.jpg';
import photo08 from '../../assets/images/JK_08.jpg';
import './Photo.css';

const photo = (props) => {
    return (
        <section className="Photo" id="photo">
            <div className="PhotoRow">
                <img src={photo01} alt="Photo01" />
                <img src={photo02} alt="Photo02" />
                <img src={photo03} alt="Photo03" />
                <img src={photo04} alt="Photo04" />
            </div>
            <div className="PhotoRow">
                <img src={photo05} alt="Photo05" />
                <img src={photo06} alt="Photo06" />
                <img src={photo07} alt="Photo07" />
                <img src={photo08} alt="Photo08" />
            </div>
        </section>
    );
}

export default photo;