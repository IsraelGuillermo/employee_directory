import React, { Component } from 'react';
import API from '../utils/API';
import Table from './table';
import Container from './container';
import SearchForm from './searchForm';

class GetEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    this.getRandomEmployees();
  }

  getRandomEmployees = () => {
    API.getRandomEmployees()
      .then((res) => {
        this.setState({ employees: res.data.results });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.employees.length > 1) {
      return (
        <div>
          <Container>
            <SearchForm />
            <Table>
              {this.state.employees.map((employee) => {
                return <h1 key={employee.login.uuid}>{employee.name.first}</h1>;
              })}
            </Table>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No employees</h1>
        </div>
      );
    }
  }
}

export default GetEmployees;
