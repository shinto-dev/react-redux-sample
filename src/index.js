import { render } from 'react-dom';
import React from 'react';

function Hi() {
  return <p>Hi,</p>;
}

render(<Hi />, document.getElementById('app'));
