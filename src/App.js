import './App.css';
import React, {useState} from "react";
import TaskList from "./Components/TaskList";


function App() {

    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'first',
            description: 'My task',
            isDone: false,
            timeStamp: 'monday',
            weight: 1,
        },
        {
            id: '2',
            title: 'second',
            description: 'My task 2',
            isDone: false,
            timeStamp: 'tuesday',
            weight: 1,
        }
    ])

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        isDone: false,
        timeStamp: '',
        weight: 1,
    })


    function createTask() {
        setTasks([...tasks, {...task, id: Date.now()}])
        setTask({
            id: '',
            title: '',
            description: '',
            isDone: false,
            timeStamp: '',
            weight: 1,
        })
    }

    function removeTask(task) {
        setTasks(prev => prev.filter(t => t.id !== task.id))
    }

    function toggleComplete(id) {
        setTasks(prevState => prevState.map(task => {
            if (task.id === id) {
               return task.isDone = !task.isDone
            } else {
                return task
            }
        }))
    }


    return (
        <div className="App">
            <input placeholder='Enter your title'
                   value={task.title}
                   onChange={event => setTask({...task, title: event.target.value})}/>
            <input placeholder='Enter your description'
                   value={task.description}
                   onChange={event => setTask({...task, description: event.target.value})}/>
            <input placeholder='Choose your day'
                   value={task.timeStamp}
                   onChange={event => setTask({...task, timeStamp: event.target.value})}/>
            <button onClick={createTask}>Add task</button>

            <h2></h2>

            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'monday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'tuesday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'wednesday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'thursday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'friday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'saturday'} tasks={tasks}/>
            <TaskList toggleComplete={toggleComplete} removeTask={removeTask} day={'sunday'} tasks={tasks}/>

        </div>
    );
}

export default App;
