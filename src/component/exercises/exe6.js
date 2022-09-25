// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import PageMultimedia from '../exercise6';

export const Exe6 = () => {
    let navigate = useNavigate();

    return (
        <div className='justify-center'>
            <Navigation />
            <h1>Exercise 6</h1>
            <PageMultimedia/>
        </div>
    );
}

