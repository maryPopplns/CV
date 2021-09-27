import React from 'react';
import './Main.css';
import GeneralInfo from '../general_info/GeneralInfo.js';
import Education from '../education/Education.js';
import Experience from '../experience/Experience.js';

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

  educationChange = (event) => {
    const { name, value, id } = event.target;
    this.setState((prevState) => {
      const { education } = prevState;
      education[id][name] = value;
      return { education: education };
    });
  };

  removeEducation = (event) => {
    const { id } = event.target;
    this.setState((prevState) => {
      const { education } = prevState;
      const FILTERED = education.filter((institution, index) => index !== +id);
      return { education: FILTERED };
    });
  };

  addExperience = () => {
    const NEW_EXPERIENCE = {
      company: '',
      title: '',
      start: '',
      end: '',
    };
    this.setState((prevState) => {
      return {
        experience: [...prevState.experience, NEW_EXPERIENCE],
      };
    });
  };

  experienceChange = (event) => {
    const { name, value, id } = event.target;
    this.setState((prevState) => {
      const { experience } = prevState;
      experience[id][name] = value;
      return { experience: experience };
    });
  };

  removeExperience = (event) => {
    const { id } = event.target;
    this.setState((prevState) => {
      const { experience } = prevState;
      const FILTERED = experience.filter((company, index) => index !== +id);
      return { experience: FILTERED };
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
          onClick={this.removeEducation}
        />
      );
    });
    const EXPERIENCE = this.state.experience.map((company, index) => {
      return (
        <Experience
          key={index}
          index={index}
          data={company}
          onChange={this.experienceChange}
          onClick={this.removeExperience}
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
        {EXPERIENCE}
        <button id='add_experience_button' onClick={this.addExperience}>
          Add Experience
        </button>
      </main>
    );
  }
}
