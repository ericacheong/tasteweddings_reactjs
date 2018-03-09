import React from 'react';

import bookCover from '../../assets/images/book_cover.jpg';
import './Book.css';

const book = (props) => (
    <section id="book" className="Book" >
        <h2>《搞婚禮・點算好？》</h2>
        <div className="BookContainer">
            <img alt="Book Cover" src={bookCover} />
            <div className="BookInfo">
                <p>Taste Weddings 婚禮統籌師 Jessica Kong 陪你談婚論嫁</p>
                <p>
                Jessica在書中有條理地向你講解每個婚禮細節，內容涵蓋中式傳統儀式、
                童話式主題婚宴和婚前各項準備，還加上溫馨提示和一目了然的多個清單，助你輕鬆掌握整個籌備婚禮的大局，放開心情迎接和享受人生重要時刻。</p>
                <h3>書籍資訊</h3>
                <p>
                出 版︰經濟日報出版社 <br />
                作 者 / 編 者︰Jessica Kong（江婉君）<br />
                定 價︰	HK$ 88.0 <br />
                頁 數︰	176 頁 <br />
                出 版 年 份︰	2015-06 <br />
                ISBN︰9789626788677 <br />
                </p>
               
                <a className="btn" href="http://www.etpress.com.hk/etpress/bookdetail.do?id=9789626788677">選購</a>
            </div>
            <div className="clear"></div>
        </div>
        
    </section>
)

export default book;