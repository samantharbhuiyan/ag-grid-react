import { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = (props) => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    ou: "",
    role: "",
    age: "",
  });
  const handleUserInput = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(newEmployee);

    setNewEmployee({
      name: "",
      ou: "",
      role: "",
      age: "",
    });
  };
  return (
    <form onSubmit={formSubmit}>
      <label>Employer Name</label>

      <input type="text" name="name" onChange={handleUserInput} />
      <br></br>
      <label>OU</label>
      <br></br>
      <input type="text" name="ou" onChange={handleUserInput} />
      <br></br>
      <label>Role</label>
      <br></br>
      <input type="text" name="role" onChange={handleUserInput} />
      <br></br>
      <label>Age</label>
      <br></br>
      <input type="Number" name="age" onChange={handleUserInput} />
      <br></br>
      <button type="submit"> Add New Employee</button>
    </form>
  );
};

export default AddUserForm;
