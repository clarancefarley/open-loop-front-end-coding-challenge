import React from "react";
import './AddUser.css';

const AddUser = () => {
  return (
    <form className='form'>
        <h1 className="form_title">Add User</h1>

        <div className="form_body">
            <div className="input_group_wrapper">
                <div className="input_group firstname">
                    <label htmlFor="firstname">First Name<span className='required'>*</span></label>
                    <input
                        type="text"
                        name="firstname"
                        className="input"
                        placeholder="What is your first name?"
                    />
                </div>

                <div className="input_group lastname">
                    <label htmlFor="lastname">Last Name<span className='required'>*</span></label>
                    <input
                        type="text"
                        name="lastname"
                        className="input"
                        placeholder="What is your last name?"
                    />
                </div>
            </div>

            <div className="input_group">
                <label htmlFor="email">Email<span className='required'>*</span></label>
                <input
                type="text"
                name="email"
                className="input"
                placeholder="Enter your email."
                />
            </div>

            <div className="input_group">
                <label htmlFor="note">Note<span className='required'>*</span></label>
                <input
                type="text"
                name="note"
                className="input"
                placeholder="Please leave a note."
                />
            </div>

            <button type="button" className="adduser_btn">
                Add User
            </button>
        </div>
    </form>
  );
};

export default AddUser;
