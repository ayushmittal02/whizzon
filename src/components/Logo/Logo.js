import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 50 }} style={{ height: 110, width: 100 }}>
                <div className='Tilt-inner pa-3'>
                    <img style={{ paddingTop: '5px' }} alt='logo' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;