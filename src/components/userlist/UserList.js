import React from "react";
import User from "../user/User";
import './UserList.css';

const UserList = () => {
    const users = [
        {
        id: 1254,
        firstname: "Clarance",
        lastname: "Farley",
        email: "clarance@clfa.com",
        note: `I'm loving this so far!`,
        },
        {
        id: 1754,
        firstname: "Edwin",
        lastname: "Isang",
        email: "edwinisang@amex.com",
        note: `chief this look amazing sha!`,
        },
        {
        id: 1354,
        firstname: "Juju",
        lastname: "King",
        email: "juju@suppermd.com",
        note: `okay cool!`,
        },
    ];

    return (
        <div className="users_wapper">
            <ul className="users_container">
                <h1 className="title">Users</h1>
                {users.map((user) => (
                <User
                    key={user.id}
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
