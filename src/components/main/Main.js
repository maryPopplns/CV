import React from 'react';
import './Main.css';
import GeneralInfo from '../general_info/GeneralInfo.js';
import Education from '../education/Education.js';

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
      education: [],
      experience: [],
    };
  }

  generalInfoChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const { generalInfo } = prevState;
      generalInfo[name] = value;
      return { generalInfo: generalInfo };
    });
  };

  educationChange = (event) => {
    const { name, value, id } = event.target;
    this.setState((prevState) => {
      const { education } = prevState;
      education[id][name] = value;
      return { education: education };
    });
  };

  addEducation = () => {
    const NEW_INSTITUTION = {
      institution: '',
      degree: '',
      start: '',
      end: '',
    };
    this.setState((prevState) => {
      return {
        education: [...prevState.education, NEW_INSTITUTION],
      };
    });
  };

  render() {
    const EDUCATION = this.state.education.map((institution, index) => {
      return (
        <Education
          key={index}
          index={index}
          data={institution}
          onChange={this.educationChange}
        />
      );
    });
    return (
      <main>
        <GeneralInfo onChange={this.generalInfoChange} data={this.state} />
        {EDUCATION}
        <button id='add_education_button' onClick={this.addEducation}>
          Add Education
        </button>
        {/* <PracticalExperience data={this.state} /> */}
      </main>
    );
  }
}
