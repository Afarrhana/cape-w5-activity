import React, { Component } from 'react';

export default class MyComponent extends Component {
  // state = {
  //   x: false,
  //   y: true


  // after update based on slide 123
  state = {
    first: 'loading...',
    second: 'loading...',
    third: 'loading...',
    fourth: 'loading...',
    doneMessage: 'finished!'


  };
  render() {
    // const { first, second } = this.state;

    // return (
    //   <main>
    //     <section>
    //       <button disabled={first}>First</button>
    //     </section>
    //     <section>
    //       <button disabled={second}>Second</button>
    //     </section>
    //   </main>
    // );

    // another example based on slide 124
    const { state } = this;

    return (
      <ul>
        {Object.keys(state)
          .filter(key => key !== 'doneMessage')
          .map(key => (
            <li key={key}>
              <strong>{key}: </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}