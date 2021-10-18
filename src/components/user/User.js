import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import './User.css';

const User = (props) => {
  const { firstname, lastname, email, note } = props;

  return (
    <li className='user'>
      <p className='note'>{note}</p>
      <div>
        <h3 className="username">{`${firstname} ${lastname}`}</h3>
        <small>{email}</small>
      </div>
      <TiDeleteOutline size="1.5em"/>
    </li>
  );
};

export default User;
