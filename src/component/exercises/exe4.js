// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E1_before.png'
import image2 from '../../img/E1_after.png'

export const Exe4 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 4</h1>
            <p>
                Do the task in page 64.
            </p>
        </div>
    );
}

