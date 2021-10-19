import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext";
import { v4 as uuidv4 } from "uuid";
import "./AddUser.css";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setFocus,
  } = useForm({ mode: "onBlur"});

  const { dispatch } = useContext(AppContext);

  const handleFormData = (userData) => {
    userData.id = uuidv4();
    dispatch({
      type: "ADD_USER",
      payload: userData,
    });

    reset();
  };

  
  useEffect(() => {
    setFocus("firstname");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(handleFormData)} className="form">
      <h1 className="form_title">Add User</h1>

      <div className="form_body">
        <div className="input_group_wrapper">
          <div className="input_group firstname">
            <label htmlFor="firstname">
              First Name<span className="required_icon">*</span>
            </label>
            <input
              type="text"
              className={`input ${errors.firstname && "error_border"}`}
              {...register("firstname", {
                required: "Please provide a first name.",
              })}
              placeholder="What is your first name?"
            />
            {errors.firstname && (
              <small className="error">{errors.firstname.message}</small>
            )}
          </div>

          <div className="input_group lastname">
            <label htmlFor="lastname">
              Last Name<span className="required_icon">*</span>
            </label>
            <input
              type="text"
              className={`input ${errors.lastname && "error_border"}`}
              {...register("lastname", {
                required: "Please provide a last name.",
              })}
              placeholder="What is your last name?"
            />
            {errors.lastname && (
              <small className="error">{errors.lastname.message}</small>
            )}
          </div>
        </div>
        <div className="input_group">
          <label htmlFor="email">
            Email<span className="required_icon">*</span>
          </label>
          <input
            type="email"
            className={`input ${errors.email && "error_border"}`}
            {...register("email", {
              required: "Please provide an email address.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please provide a valid email address",
              },
            })}
            placeholder="Enter your email address."
          />
          {errors.email && (
            <small className="error">{errors.email.message}</small>
          )}
        </div>
        <div className="input_group">
          <label htmlFor="note">
            Note<span className="required_icon">*</span>
          </label>
          <input
            type="note"
            className={`input ${errors.note && "error_border"}`}
            {...register("note", {
              required: "Please provide a note.",
            })}
            placeholder="Please leave a note."
          />
          {errors.note && (
            <small className="error">{errors.note.message}</small>
          )}
        </div>

        <button type="submit" disabled={!isValid} className={`${!isValid ? "color_disabled" : "color_default"}`}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUser;
