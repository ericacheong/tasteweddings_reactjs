import React from 'react';
import Ionicon from 'react-ionicons';

const contact = (props) => {
    return (
        <section id="contact">
            <h2>聯絡我們</h2>
            <div>
                <address>Unit A 1/F A Kun Lock Building 178 Nathan Road Hong Kong</address>
                <a href="tel:9338-8255">9338-8255</a>
                <Ionicon icon="logo-facebook" onClick={() => console.log('Hi!')} fontSize="35px" color="#94710F"/>
            </div>
            <form>
                <input type="text" placeholder="姓名" required/>
                <input type="email" placeholder="電郵" required/>
                <textarea placeholder="查詢" />
                <button type="submit" className="btn">送出</button>
            </form>
        </section>
    );
}

export default contact;