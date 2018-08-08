import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyCode: "Press key",
      key: "---",
      which:"---",
      code: "---"
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      this.setState({
        keyCode: e.keyCode,
        key: e.key,
        which:e.which,
        code: e.code
      })
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown')
  }

  render() {
    const { keyCode, key,which, code} = this.state
    return (
      <div className="App">
        <span className="App__KeyCode">{this.state.keyCode}</span>
        <div className="Box__Container">
          <div className="Box">
            <h2>e.key</h2>
            <span>{key}</span>
          </div>
          <div className="Box">
            <h2>e.which</h2>
            <span>{which}</span>
          </div>
          <div className="Box">
            <h2>e.code</h2>
            <span>{code}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App