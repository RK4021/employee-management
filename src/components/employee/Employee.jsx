import React, { Component } from "react";
import sendData from "../../data/employeeData";
import "./employeeCss.css";
import gsap from "gsap";
import EditEmployeeForm from "../editEmployee/EditEmployeeForm";
import AddEmployee from "../addEmployee/AddEmployee";

class Employee extends Component {
  state = {
    employeeData: sendData(),
    isEditFormActive: false,
    isAddFormActive: false,
    id: "",
  };

  handleEdit(editedData) {
    let { id } = editedData;
    const { employeeData } = this.state;
    const index = employeeData.findIndex((data) => data.id === id);

    for (let key in editedData) {
      if (editedData[key] !== "") {
        employeeData[index][key] = editedData[key];
      }
    }
    console.log(employeeData[index]);
    this.setState({ employeeData });
  }
  handleNewEmployee(employee) {
    const { employeeData } = this.state;
    const id = employeeData.length + 200;
    employee.id = id;
    employeeData.push(employee);
    this.setState({ employeeData });
  }

  handleEditActiveForm() {
    let isEditFormActive = !this.state.isEditFormActive;
    this.setState({ isEditFormActive });
  }
  handleAddActiveForm() {
    let isAddFormActive = !this.state.isAddFormActive;
    this.setState({ isAddFormActive });
    console.log(isAddFormActive);
  }
  componentDidMount() {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.easeOut" },
    });

    tl.fromTo(
      ".details-heading",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5 }
    );
    tl.fromTo(
      ".add-new-btn",
      { scale: 0 },
      { scale: 1, ease: "elastic.out(1, 0.3)", duration: 2 },
      "<50%"
    );
    tl.fromTo(".edit-btn", { x: 100 }, { x: 0, duration: 1 }, "<");
  }
  render() {
    const { isAddFormActive, isEditFormActive, id } = this.state;
    return (
      <div>
        <EditEmployeeForm
          isActive={isEditFormActive}
          id={id}
          onClick={() => this.handleEditActiveForm()}
          onSubmit={(editedData) => this.handleEdit(editedData)}
        />
        <AddEmployee
          isActive={isAddFormActive}
          onClick={() => this.handleAddActiveForm()}
          onSubmit={(newEmployee) => this.handleNewEmployee(newEmployee)}
        />

        <h1 className="my-6 font-bold overflow-hidden">
          <span className="details-heading inline-block">Details</span>
          <span className="details-heading inline-block ml-2 ">Heading</span>
        </h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.salary}</td>
                  <td>{data.location}</td>
                  <td className="inline-block overflow-hidden ">
                    <div className="edit-btn">
                      <button
                        onClick={() => {
                          const id = data.id;
                          this.setState({ id });
                          this.handleEditActiveForm();
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="add-new-btn inline-block ">
          <button
            onClick={() => this.handleAddActiveForm()}
            className="btn btn--lg btn-secondary mt-4 ml-4"
          >
            Add New Employee
          </button>
        </div>
      </div>
    );
  }
}

export default Employee;
