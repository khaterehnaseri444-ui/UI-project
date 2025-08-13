import React, { useState } from 'react';
import '../components/Footer.css'
import Icon from './UI/Pages/Icon/Icon';
function Footer() {
    const company = [
        { id: 1, title: 'About' },
        { id: 2, title: 'Features' },
        { id: 3, title: 'Works' },
        { id: 4, title: 'Career' },
    ];
    const help = [
        { id: 1, title: 'Customer Support' },
        { id: 2, title: 'Delivery Details' },
        { id: 3, title: 'Terms & Conditions' },
        { id: 4, title: 'Privacy Policy' },
    ];
    const FAQ = [
        { id: 1, title: 'Account' },
        { id: 2, title: 'Manage Deliveries' },
        { id: 3, title: 'Orders' },
        { id: 4, title: 'Payments' },
    ];
    const resourse = [
        { id: 1, title: 'Free eBooks' },
        { id: 2, title: 'Development Tutorial' },
        { id: 3, title: 'How to - Blog' },
        { id: 4, title: 'Youtube Playlist' },
    ];
    const socialIcons = [
        { id: 1, orginalIcon: 'git', clickedIcon: 'git-click' },
        { id: 2, orginalIcon: 'insta', clickedIcon: 'insta-click' },
        { id: 3, orginalIcon: 'facebook', clickedIcon: 'facebook-click' },
        { id: 4, orginalIcon: 'twitter', clickedIcon: 'twitter-click' },
    ]
    const [IsSocialClick, setIsSocialClick] = useState(3)
    const chooseIcon = (id) => {
        setIsSocialClick(id)
    }
    return (
        <div className='footer'>
            <div className='emailBox'>
                <h1 className='emailText'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className='emailPart'>
                    <div className='emailInput'>
                        <Icon name={'emailIcon'} />
                        <input type="text" placeholder='Enter your email address' />
                    </div>
                    <button >Subscribe to Newsletter</button>
                </div>
            </div>
            <div className='container-footer'>
                <div className='first-part'>
                    <h1>SHOP.CO</h1>
                    <span>We have clothes that suits your style and which you’re proud to wear. From women to men</span>
                    <div className='icons-social'>
                        {socialIcons.map((item) => (
                            <React.Fragment key={item.id}>
                                <button
                                    onClick={() => chooseIcon(item.id)}
                                    className={IsSocialClick === item.id ? "button-clicked" : "button-socialIcons"}>
                                    {IsSocialClick === item.id ? (<Icon name={item.clickedIcon} />) : (<Icon name={item.orginalIcon} />)}
                                </button>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='company-part'>
                    <ul>
                        <p>COMPANY</p>
                        {company.map((item) => (
                            <React.Fragment key={item.id}>
                                <li>{item.title}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className='help'>
                    <ul>
                        <p>HELP</p>
                        {help.map((item) => (
                            <React.Fragment key={item.id}>
                                <li>{item.title}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className='FAQ'>
                    <ul>
                        <p>FAQ</p>
                        {FAQ.map((item) => (
                            <React.Fragment key={item.id}>
                                <li>{item.title}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className='resourse'>
                    <ul>
                        <p>RESOURCES</p>
                        {resourse.map((item) => (
                            <React.Fragment key={item.id}>
                                <li>{item.title}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            <hr style={{ width: '1440px', height: '1px', marginTop: '40px' }} />
            <div className='end'>
                <span>Shop.co © 2000-2023, All Rights Reserved</span>
                <div className='icons-end'>
                    <Icon name={'end-footer-icons'} />
                </div>
            </div>
        </div>
    );
}

export default Footer;