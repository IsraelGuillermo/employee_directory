import React, { Component } from 'react';
import API from '../utils/API';

class GetEmployees extends Component {
  componentDidMount() {
    this.getRandomEmployees();
  }

  getRandomEmployees = () => {
    API.getRandomEmployees()
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
  };

  render() {
    return <div></div>;
  }
}

export default GetEmployees;
