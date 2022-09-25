// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import image1 from '../../img/E2.png'
import image2 from '../../img/E2_2.png'
import image3 from '../../img/E2_3.png'

export const Exe2 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 2</h1>
            <p>
                Try 1: Exercise of cars & trucks using array<br />
                Try 2: Arrow Function - for array which the function will be use for each of array<br />

                <figure>
                    <img src={image1} alt="exercise2" />
                    <figcaption>Figure 1.1 The output of first car, list of cars, list of trucks, arrow function and arrays details</figcaption>
                </figure>

                <figure>
                    <img src={image2} alt="exercise2" />
                    <figcaption>Figure 1.2 The out that retrieve all item in the mypets array</figcaption>
                </figure>
                Task: Add a cat to mypets<br />
                <figure>
                    <img src={image3} alt="exercise2" />
                    <figcaption>Figure 1.3 The output after adding a cat to mypets</figcaption>
                </figure>
            </p>
        </div>
    );
}

