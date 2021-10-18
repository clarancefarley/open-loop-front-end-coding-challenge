import React, { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { AppContext } from '../../AppContext';
import './User.css';

const User = (props) => {
  const { id, firstname, lastname, email, note } = props;

  const { dispatch } = useContext(AppContext);

  const handleClick = () => dispatch({
    type: 'DELETE_USER',
    payload: id,
  })

  return (
    <li className='user'>
      <p className='note'>{note}</p>
      <div>
        <h3 className="username">{`${firstname} ${lastname}`}</h3>
        <small>{email}</small>
      </div>
      <TiDeleteOutline onClick={handleClick} size="1.5em" />
    </li>
  );
};

export default User;
