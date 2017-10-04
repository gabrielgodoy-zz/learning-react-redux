import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Boilerplate para começas um projeto</p>
        {this.state.counter}
        <button onClick={this.onClick}>
          increment
        </button>
      </div>
    );
  }
}

export default connect()(Home);
