/**
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello World !</h1>
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
