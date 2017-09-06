import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {
            // Map over this.props.employees
            this.props.employees.map(employee => (
              <li className="listText" key={employee.id} onClick={ () => this.props.selectEmployee(employee)}>{employee.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;
