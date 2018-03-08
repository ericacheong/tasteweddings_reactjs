import React from 'react';
import Ionicon from 'react-ionicons';

import './Contact.css';

const contact = (props) => {
    return (
        <section id="contact" className="Contact">
            <h2>聯絡我們</h2>
            
            <div className="ContactContainer">
                <div className="ContactForm">
                    <form>
                        <input type="text" placeholder="姓名" required/><br />
                        <input type="email" placeholder="電郵" required/><br />
                        <textarea placeholder="查詢" /><br />
                        <button type="submit">送出</button>
                    </form>
                </div>
                <div className="ContactInfo">
                    <table>
                        <tbody>
                            <tr>
                                <td>地址：</td>
                                <td><address>Unit A 1/F A Kun Lock Building,<br /> 178 Nathan Road Hong Kong</address></td>
                            </tr>
                            <tr>
                                <td>電話：</td>
                                <td><a href="tel:9338-8255">9338-8255</a></td>
                            </tr>
                            <tr>
                                <td>電郵：</td>
                                <td>jessica@tasteweddings.com.hk</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <a href="https://www.facebook.com/TasteWeddings/" className="Ionicon">
                                        <Ionicon icon="logo-facebook" fontSize="30px" color="#94710F"/>
                                    </a>
                                    <a href="https://www.instagram.com/jessicak.weddingplanner/" className="Ionicon">
                                        <Ionicon icon="logo-instagram" fontSize="30px" color="#94710F"/>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
               <div className="clear"></div>
               
            </div>
            
        </section>
    );
}

export default contact;