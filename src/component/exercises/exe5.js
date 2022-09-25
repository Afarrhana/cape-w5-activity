// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E1_before.png'
import image2 from '../../img/E1_after.png'

export const Exe5 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 5</h1>
            <p>
                try out the codes on page 70
                spread operator
            </p>
        </div>
    );
}

