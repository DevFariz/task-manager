import React, { Component } from 'react';
import {GiConfirmed} from "react-icons/gi";
import {CgCloseO} from "react-icons/cg"
import "./TaskState.css"

export default class TaskState extends Component {
  render() {
    return (
      <div className='task-state-container'>
        <div className="task-state task-state_default">Running</div>
        <div className="task-state__btns">
            <button className="task-state__btn task-state__btn-draft"><CgCloseO /></button>
            <button className="task-state__btn task-state__btn-completed"><GiConfirmed/></button>
        </div>
      </div>
    )
  }
}
