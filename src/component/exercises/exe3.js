// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E3.png'

export const Exe3 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 3</h1>
            <p>Task: use for..in  to print out the content of dog
                <br />refer to for..in example in page 62
            </p>
            <figure>
                <img src={image1} alt="exercise3" />
                <figcaption>Figure 1.1 The output using different loop</figcaption>
            </figure>
        </div>
    );
}

