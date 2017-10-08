import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Boilerplate para começar um projeto</p>
      </div>
    );
  }
}

export default connect()(Home);
