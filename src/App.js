import React, { Component } from "react";
import Aside from "./components/aside/Aside";
import "./App.css";
import Search from "./components/search/Search";
import Filter from "./components/filter/Filter";
import TaskItems from "./components/taskItems/TaskItems";
import CreateTask from "./components/createTask/CreateTask";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <aside className="aside">
            <Aside />
          </aside>
          <main className="main">
            <Search />
            <Filter />
            <TaskItems />
          </main>
        </div>
        <div className="popup">
            <CreateTask />
        </div>
      </>
    );
  }
}

export default App;
