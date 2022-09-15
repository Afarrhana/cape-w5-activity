// try out code in page 122-124
import React from 'react';
import { render } from 'react-dom';
import MyComponent from './exercise8/MyComponent';

import { useNavigate } from 'react-router-dom';

export const E8 = () => {
    let navigate = useNavigate();

    // render(<MyComponent />, document.getElementById('root'));

    //after alter based on slide page 122
    // const myComponent = render(<MyComponent />, document.getElementById('root'));

    // setTimeout(() => {
    //     myComponent.setState({
    //         heading: 'React Awesomesauce',
    //         content: 'Done!'
    //     });
    // }, 3000);

    //after individual update of state based on slide 125
    const myComponent = render(<MyComponent />, document.getElementById('root'));

    setTimeout(() => {
        myComponent.setState({ first: 'done!' });
    }, 1000);

    setTimeout(() => {
        myComponent.setState({ second: 'done!' });
    }, 2000);
    setTimeout(() => {
        myComponent.setState({ third: 'done!' });
      }, 3000);
      
      setTimeout(() => {
        myComponent.setState(
           state => ({
          ...state,
          fourth: state.doneMessage
            }));
      }, 4000);
      
}
