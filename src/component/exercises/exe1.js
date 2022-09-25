// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E1_before.png'
import image2 from '../../img/E1_after.png'

export const Exe1 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 1</h1>
            <p>Exercise: Try out code in Page 41
                <br /> Enhance it as follows: The form reads a second number, and
                calculate the sum
                <br /><br />
                Figure 1.1 below shows the input design after modify the codes while Figure 1.2 illustrates the output after inserting the numbers
            </p>
            <figure>
                <img src={image1} alt="exercise1" />
                <figcaption>Figure 1.1 The form before insert numbers</figcaption>
            </figure>

            <figure>
                <img src={image2} alt="exercise1" />
                <figcaption>Figure 1.2 The form after insert numbers</figcaption>
            </figure>
        </div>
    );
}

