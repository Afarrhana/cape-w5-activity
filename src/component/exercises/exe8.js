// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E8_before.png'
import image2 from '../../img/E8_after.png'
import image3 from '../../img/E8_after_2.png'
import image4 from '../../img/E8_after_settimeout.png'

export const Exe8 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 8</h1>
            <p>
                try out code in page 122-124
            </p>
            <figure>
                <img src={image1} alt="exercise8" />
                <figcaption>Figure 1.1</figcaption>
            </figure>
            <figure>
                <img src={image2} alt="exercise8" />
                <figcaption>Figure 1.2</figcaption>
            </figure>
            <figure>
                <img src={image3} alt="exercise8" />
                <figcaption>Figure 1.3</figcaption>
            </figure>
            <figure>
                <img src={image4} alt="exercise8" />
                <figcaption>Figure 1.4</figcaption>
            </figure>
        </div>
    );
}

