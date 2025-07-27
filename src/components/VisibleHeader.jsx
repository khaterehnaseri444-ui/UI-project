import React, { useState } from 'react';
import '../components/VisibleHeader.css'
import Icon from './UI/Pages/Icon/Icon';
function VisibleHeader() {
    const [visibleDiv, setVisibleDiv] = useState(true)
    const CloseHandler = () => {
        setVisibleDiv(false)
    }
    return (
        <div>
            {visibleDiv && (<div className='visible'>
                <p>Sign up and get 20% off to your first order.<a href="">Sign Up Now</a></p>
                <button onClick={CloseHandler}>
                    <Icon name={'close'} />
                </button>
            </div>)}
        </div>
        
    );
}

export default VisibleHeader;