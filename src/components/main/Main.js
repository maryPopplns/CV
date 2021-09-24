import React from 'react';
import './Main.css';
import GeneralInfo from '../general_info/GeneralInfo.js';

export default class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <GeneralInfo data={this.state} />;
  }
}
