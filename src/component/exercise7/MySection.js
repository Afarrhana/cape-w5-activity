import React, { Component } from 'react';

export default class MySection extends Component {
  render() {
    return (
      <section>
        <h2>My Section</h2>
        {/* additional addon based on workshop */}
        <div>
          {this.props.introtext}
        </div>
        {/* end of addon */}
        
        {this.props.children}
      </section>
    );
  }
}
