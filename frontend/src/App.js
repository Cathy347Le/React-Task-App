import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import About from './Components/Pages/About';
import Notes from './Components/Pages/Notes';
import TaskDetails from './Components/TaskDetails';
import './App.scss';

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      if (tasksFromServer) {
        setTasks(tasksFromServer);
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    // console.log(data);
    const sortedData = await sortTasksByDay(data);
    // console.log(sortedData);
    return sortedData;
  };

  const sortTasksByDay = async (tasks) => {
    const sorter = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7,
    };

    const sortedData = await tasks.sort((a, b) => {
      return sorter[a.date] - sorter[b.date];
    });

    return sortedData;
  };

  const fetchSingleTask = async (id) => {
    const res = await fetch(`api/tasks/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
  };

  //FETCH & PROMISE
  // useEffect(() => {
  //   const url = "http://localhost:5000/tasks";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // },[]);

  const handleShowAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const handleAddTask = async (task) => {
    //POST request to the server
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    //Update the frontend
    const data = await res.json();

    if (tasks.length > 0) {
      const sortedData = await sortTasksByDay([...tasks, data]);
      setTasks(sortedData);
    } else {
      setTasks([data]);
    }
  };

  // const handleAddTask = (task) => {
  //   // console.log(task);
  //   const id = Math.floor(Math.random() * 10000) + 1; // Generate a random id number
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  const handleDelete = async (id) => {
    // console.log("test delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // const handleDeleteAllTask = () => {
  //   // console.log(tasks);
  //   // console.log(tasks.length);
  //   setTasks(tasks.length === 0);
  // };

  const handleDeleteAllTask = async (tasks) => {
    const getTaskIDs = await tasks.map((task) => task.id);
    console.log('delete all', getTaskIDs);

    await getTaskIDs.forEach((id) => {
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
    });

    setTasks((tasks.length = 0));
  };

  const handleToggleCompleted = async (id) => {
    //Make the change
    const getToggledTask = await fetchSingleTask(id);
    const updatedTask = {
      ...getToggledTask,
      completed: !getToggledTask.completed,
    };

    //PUT request to the server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    //Update the frontend
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      )
    );
  };

  // const handleToggleCompleted = (id) => {
  //   // console.log("test toggle", id);
  //   // Make sure correct task item is targeted (id match check), if id matches, copy the task (...), but change the completed property to the opposite. Otherwise no change.
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };

  return isLoaded ? (
    <Router>
      <div className="App">
        <Header
          name="Cathy"
          onShowAddTaskForm={handleShowAddTaskForm}
          onAddTaskButtonToggle={showAddTaskForm}
          count={tasks.length}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTaskForm && <AddTask onAddTask={handleAddTask} />}
                  {tasks.length > 0 ? (
                    <TaskList
                      tasks={tasks}
                      onDelete={handleDelete}
                      onToggleCompleted={handleToggleCompleted}
                      onDeleteAllTask={handleDeleteAllTask}
                    />
                  ) : (
                    <p className="no-tasks-msg text-center">
                      Hooray!!! You have no more tasks.
                    </p>
                  )}
                </>
              }
            />

            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/About" element={<About />} />
            <Route path="/Notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
    </Router>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
