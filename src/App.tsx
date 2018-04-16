import * as React from 'react';
import './App.css';

import Chat from './Scenes/Chat';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Chat />
      </div>
    );
  }
}

export default App;
