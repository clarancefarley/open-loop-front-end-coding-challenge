import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { v4 as uuidv4 } from "uuid";
import "./AddUser.css";

const AddUser = () => {
  const { dispatch } = useContext(AppContext);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    note: "",
  });

  const resetUser = () => setUser(user);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      id: uuidv4(),
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      note: user.note,
    };

    dispatch({
      type: "ADD_USER",
      payload: userData,
    });

    resetUser();
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="form_title">Add User</h1>

      <div className="form_body">
        <div className="input_group_wrapper">
          <div className="input_group firstname">
            <label htmlFor="firstname">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              className="input"
              onChange={handleChange}
              value={user.firstname}
              placeholder="What is your first name?"
            />
          </div>

          <div className="input_group lastname">
            <label htmlFor="lastname">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name={"lastname"}
              className="input"
              onChange={handleChange}
              value={user.lastname}
              placeholder="What is your last name?"
            />
          </div>
        </div>

        <div className="input_group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="text"
            name="email"
            className="input"
            onChange={handleChange}
            value={user.email}
            placeholder="Enter your email."
          />
        </div>

        <div className="input_group">
          <label htmlFor="note">
            Note<span className="required">*</span>
          </label>
          <input
            type="text"
            name="note"
            className="input"
            onChange={handleChange}
            value={user.note}
            placeholder="Please leave a note."
          />
        </div>

        <button type="submit" className="adduser_btn">
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUser;
