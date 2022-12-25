import "./App.css";
import { useState } from "react";
import Employee from "./components/employee/Employee";
import AddEmployee from "./components/addEmployee/AddEmployee";
import EditEmployeeForm from "./components/editEmployee/EditEmployeeForm";

function App() {

  return (
    <div className="container mx-auto">
      
      <Employee />
      {/* <AddEmployee /> */}
    </div>
  );
}

export default App;
