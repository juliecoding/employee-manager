import React, { Component } from 'react';

class EmployeeEditor extends Component {
  constructor() {
    super();
    this.state = {
      employee: null,  //If we had not declared these here, would they be inaccessible in setState later on? Is the purpose to make it clear what will eventually be used?
      originalEmployee: null,
      notModified: true
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      employee: Object.assign({}, props.selected),
      originalEmployee: props.selected,
      notModified: true
    })
  }

  handleChange(propToChange, val) {
    if (this.state.notModified) {
      this.state.notModified = false;
    }
    var employeeCopy = Object.assign({}, this.state.employee);
    employeeCopy[propToChange] = val;
    this.setState = ({employee: employeeCopy});
  }

  save(name, phone, title) {
    this.originalEmployee.updateName(name);
    this.originalEmployee.updatePhone(phone);
    this.originalEmployee.updateTitle(title);
    this.setState({notModified: true});
    this.props.refreshList();
  }

  cancel() {
    var employeeCopy = Object.assign({}, this.state.originalEmployee);
    this.setState({employee: employeeCopy, notModified: true})
  }

  render() {
    return (
      <div className="infoCard">
        {
          this.state.employee
          ?
          <div>
            <span id="employeeID"> ID: { this.state.employee.id } </span>
            <p id="employeeTitle"> { this.state.originalEmployee.name } </p>
            <br />
            <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save }> Save </button>
            <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel }> Cancel </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input className="materialInput" value={ this.state.employee.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>
            <span className="placeholderText"> Phone Number </span>
            <input className="materialInput" value={ this.state.employee.phone } onChange={ (e) => { this.handleChange('phone', e.target.value) } }></input>
            <span className="placeholderText"> Title </span>
            <input className="materialInput" value={ this.state.employee.title } onChange={ (e) => { this.handleChange('title', e.target.value) } }></input>
          </div>
          :
          <p id="noEmployee"> No Employee Selected </p>
        }

      </div>
    )
  }
}

export default EmployeeEditor;
