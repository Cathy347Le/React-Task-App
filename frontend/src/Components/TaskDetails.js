import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TaskDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [task, setTask] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      if (data) {
        console.log(data);
        setTask(data);
        setIsLoaded(true);
      } else {
        // console.log(error);
        setError(error);
        setIsLoaded(true);
      }
    };

    fetchTask();
  }, [id, error]);

  return isLoaded ? (
    <div className="single-task-page">
      <h2>Title: {task.title}</h2>
      <p>Date: {task.date}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default TaskDetails;
