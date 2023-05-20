import './css/index.scss';

import CountDownTimer from './components/CountDownTimer';
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
          <CountDownTimer />
      </div>
    </div>
  );
};

export default App;
