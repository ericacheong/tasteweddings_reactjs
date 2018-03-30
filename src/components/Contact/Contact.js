import React from 'react';
import Ionicon from 'react-ionicons';
import WufooForm from 'react-wufoo-embed';

import './Contact.css';

const contact = (props) => {
    /*
    let oldForm = (
        <form>
                        <input type="text" placeholder="姓名" required/><br />
                        <input type="email" placeholder="電郵" required/><br />
                        <textarea row="5" placeholder="查詢" /><br />
                        <button type="submit">送出</button>
                    </form>
    )
    */
    return (
        <section id="contact" className="Contact">
            <h2>聯絡我們</h2>
            
            <div className="ContactContainer">
                <div className="ContactForm">
                    <WufooForm userName="ericaclw" formHash="mptre321sixw72" />
                </div>
                <div className="ContactInfo">
                                <p><strong>地址：</strong><br />
                                Unit A 1/F A Kun Lock Building,<br /> 178 Nathan Road Hong Kong</p>
                            
                                <p>電話：<br />
                                <a href="tel:9338-8255">9338-8255</a></p>
                        
                                <p>電郵：<br />
                                <a mailto="jessica@tasteweddings.com.hk">jessica@tasteweddings.com.hk</a></p>

                                <p>
                                    <a href="https://www.facebook.com/TasteWeddings/" className="Ionicon">
                                        <Ionicon icon="logo-facebook" fontSize="30px" color="#94710F"/>
                                    </a>
                                    <a href="https://www.instagram.com/jessicak.weddingplanner/" className="Ionicon">
                                        <Ionicon icon="logo-instagram" fontSize="30px" color="#94710F"/>
                                    </a>
                                </p>
                    
                </div>
               <div className="clear"></div>
               
            </div>
            
        </section>
    );
}

export default contact;