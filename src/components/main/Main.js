import React from 'react';
import './Main.css';
import GeneralInfo from '../general_info/GeneralInfo.js';

export default class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      generalInfo: {
        lastName: '',
        firstName: '',
        email: '',
        phoneNumber: '',
      },
      education: {},
      experience: {},
    };
  }

  onGeneralInfoChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const { generalInfo } = prevState;
      generalInfo[name] = value;
      return { generalInfo: generalInfo };
    });
  };

  render() {
    return (
      <main>
        <GeneralInfo onChange={this.onGeneralInfoChange} data={this.state} />
        {/* <Education data={this.state} /> */}
        {/* <PracticalExperience data={this.state} /> */}
      </main>
    );
  }
}
