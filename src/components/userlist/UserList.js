import React, { useContext } from "react";
import User from "../user/User";
import { AppContext } from '../../AppContext'
import './UserList.css';

const UserList = () => {
    const { users } = useContext(AppContext);

    return (
        <div className="users_wapper">
            <ul className="users_container">
                <h1 className="title">Users</h1>
                {users.map((user) => (
                <User
                    key={user.id}
                    id={user.id}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    note={user.note}
                />
                ))}
            </ul>
        </div>
    );
};

export default UserList;
