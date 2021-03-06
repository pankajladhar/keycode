import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            keyCode: "Press key"
        };
        this.setKeyCode = this.setKeyCode.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.setKeyCode)
    }

    setKeyCode(e) {
        this.setState({
            keyCode: e.keyCode,
            key: e.key,
            which: e.which,
            code: e.code
        })
    }

    render() {
        const { keyCode, key, which, code } = this.state
        return (
            <div className="App">
                <span className="App__KeyCode">{keyCode}</span>
                {keyCode !== "Press key" && <div className="Box__Container">
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
                </div>}
            </div>
        );
    }
}

export default App