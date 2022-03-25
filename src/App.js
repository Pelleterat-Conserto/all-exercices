import React, { useState } from 'react';

class App extends React.Component {
  state = { time: 0, };
  
  timer = null;

  tick = () => this.setState({
    time: this.state.time + 1,
  });

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h2>{this.state.time} </h2>
  }
}

export default App