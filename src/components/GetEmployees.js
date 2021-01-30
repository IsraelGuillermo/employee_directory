import React, { Component } from 'react';
import API from '../utils/API';
import Container from './container';
import SearchForm from './searchForm';
import TableBody from './TableBody';
import Table from './Table';

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
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    this.state.employees.filter((employee) => {
      let search = event.target.value;
      employee.name.first.includes(search);
    });
  };

  render() {
    if (this.state.employees.length > 1) {
      console.log(this.state.employees);
      return (
        <div>
          <Container>
            <SearchForm />

            <Table>
              {this.state.employees.map((employee) => (
                <TableBody
                  uuid={employee.login.uuid}
                  first={employee.name.first}
                  last={employee.name.last}
                  email={employee.email}
                  cell={employee.cell}
                />
              ))}
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
