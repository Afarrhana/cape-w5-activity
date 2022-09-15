// try out the code in page 105-107
import React from 'react';
import { render } from 'react-dom';

import MySection from './exercise7/MySection';
import MyButton from './exercise7/MyButton';


import { useNavigate } from 'react-router-dom';

export const E7 = () => {
    let navigate = useNavigate();

    render(
        // <MySection> // original document
        // for example if change the MySection with introtext element
        <MySection introtext="This is a button">
            {/* <MyButton>My Button Text</MyButton> */}
            <MyButton text="Click Me" />
            < MyButton text="Don’t Click" />
        </MySection >,
        document.getElementById('root')
    );
}

