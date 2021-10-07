import React, { useState } from 'react';
import Task from './Task';
import CompletedTasks from './Completed';
import './index.css';

function App() {

  const [task, newTask] = useState('');
  const [finalTask, newFinalTask] = useState([]);
  const [CompletedTask, FinalCompletedTask] = useState([]);

  const typed = (event) => {
    newTask(event.target.value);
  }

  const addTask = (event) => {

    event.preventDefault();

    if (finalTask.length < 5) {
      newFinalTask((preValue) => {
        return [...preValue, task];
      });

      newTask('');
    } else {
      alert("Oh ho!!😯 too much work. Complete remaining work first");
    }

  }

  const deleteTask = (id) => {

    newFinalTask((preValue) => {
      return preValue.filter((ele, ind) => {

        if (ind === id) {
          FinalCompletedTask((preVal) => {
            return [...preVal, ele];
          });
        }

        return ind !== id;
      });
    })
  }

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>To Do List</h1>
          <br />

          <form onSubmit={addTask}>
            <input type="text" placeholder="Enter your task" onChange={typed} value={task} required />
            <button type='submit'> + </button>
          </form>

          <div className="flexed">
            <div>
              <h3>Tasks: </h3>

              {
                finalTask.map((val, ind) => {
                  return (
                    <Task key={ind} id={ind} task={val} onSelect={deleteTask} />
                  );
                })
              }

            </div>
            <div>

              <h3>Completed: </h3>

              {
                CompletedTask.map((valu, inde) => {
                  return (
                    <CompletedTasks key={inde} tasks={valu} />
                  );
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
