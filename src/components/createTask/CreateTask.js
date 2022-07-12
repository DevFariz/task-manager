import React, { Component } from "react";
import "./CreateTask.css";
import { GrClose } from "react-icons/gr";

class CreateTask extends Component {
  render() {
    return (
      <form className="create-task">
        <div>
          <label htmlFor="task-title" className="task-label">
            Title:
          </label>
          <input type="text" id="task-title" className="create-task__inp" />
        </div>
        <div>
          <label htmlFor="task-desc" className="task-label">
            Description:
          </label>
          <textarea rows={4} type="text" id="task-desc" className="create-task__inp" />
        </div>
        <h5 className="task-item__list-title">List</h5>
        <div className="add-task">
          <input type="text" className="create-task__inp" />
          <button className="create-new__item">+</button>
        </div>
        <h5 className="task-item__keywords-title">Keywords</h5>
        <div className="add-keywords">
          <input type="text" className="create-task__inp" />
          <button className="create-new__item">+</button>
        </div>
        <button className="submit-task" type="button">Submit Task</button>
        <button className="create-task__close" type="button">
          <GrClose />
        </button>
      </form>
    );
  }
}

export default CreateTask;
