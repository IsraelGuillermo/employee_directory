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
      employees: [],
      filtered: [],
      sorted: ''
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
      .then(() => {
        this.setState({ filtered: this.state.employees });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.findEmployees(event.target.value);
  };

  findEmployees = (name) => {
    const updatedEmployees = this.state.employees.filter((emp) => {
      let empName = emp.name.first;
      return empName.toLowerCase().includes(name.toLowerCase());
    });
    this.setState({ filtered: updatedEmployees });
    return updatedEmployees;
  };

  sortEmployeesByName = (event) => {
    event.preventDefault();
    console.log('clicked');
    const sortedEmployess = this.state.filtered.sort(function (a, b) {
      let nameA = a.name.first;
      let nameB = b.name.first;
      if (nameA < nameB) {
        console.log(nameA);
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    if (this.state.sorted === 'DESC') {
      sortedEmployess.reverse();
      this.setState({ sorted: 'ASC' });
    } else {
      this.setState({ sorted: 'DESC' });
    }
    this.setState({ filtered: sortedEmployess });
  };

  render() {
    console.log(this.state.filtered);

    if (this.state.employees.length > 1) {
      return (
        <div>
          <Container>
            <SearchForm handleInputChange={this.handleInputChange} />
            <Table sortEmployeesByName={this.sortEmployeesByName}>
              {this.state.filtered.map((employee) => (
                <TableBody
                  key={employee.login.uuid}
                  photo={employee.picture.thumbnail}
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
