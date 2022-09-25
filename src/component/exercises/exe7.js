import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E7_before.png'
import image2 from '../../img/E7_after.png'

export const Exe7 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 7</h1>
            <p>
                try out the code in page 105-107
            </p>
            <figure>
                <img src={image1} alt="exercise7" />
                <figcaption>Figure 1.1 The output after copy from the slides</figcaption>
            </figure>
            <figure>
                <img src={image2} alt="exercise7" />
                <figcaption>Figure 1.1 The output after adjusting based on slides</figcaption>
            </figure>
        </div>
    );
}

