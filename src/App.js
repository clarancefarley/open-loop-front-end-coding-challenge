import React from "react";
import AddUser from "./components/adduser/AddUser";
import UserList from "./components/userlist/UserList";
import { AppProvider } from "./AppContext";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="app_container">
        <AddUser />
        <UserList />
      </div>
    </AppProvider>
  );
};

export default App;
