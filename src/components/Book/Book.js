import React from 'react';

import bookCover from '../../assets/images/book_cover.jpg';
import './Book.css';

const book = (props) => (
    <section id="book" className="Book" >
        <h2>《搞婚禮・點算好？》</h2>
        <div className="BookContainer">
            <img alt="Book Cover" src={bookCover} />
            <div>
                <p>Taste Weddings 婚禮統籌師 Jessica Kong 陪你談婚論嫁</p>
                <p>
                Jessica在書中有條理地向你講解每個婚禮細節，內容涵蓋中式傳統儀式、
                童話式主題婚宴和婚前各項準備，還加上溫馨提示和一目了然的多個清單，助你輕鬆掌握整個籌備婚禮的大局，放開心情迎接和享受人生重要時刻。<br />

                三聯 商務 諴品各大書店有售<br />
                出版及發行：香港經濟日報出版社
                </p>
                <a className="btn" href="http://www.etpress.com.hk/etpress/bookdetail.do?id=9789626788677">選購</a>
            </div>
        </div>
        
    </section>
)

export default book;