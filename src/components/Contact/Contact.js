import React from 'react';

const contact = (props) => {
    return (
        <section id="contact">
            <h2>聯絡</h2>
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