import './App.css';
import React, {useState} from "react";
import TaskList from "./Components/TaskList";
import MyInput from "./Components/MyInput";
import MyButton from "./Components/MyButton";


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

    const [completeTaskPoints, setCompleteTaskPoints] = useState(0)

    function createTask(e) {
        e.preventDefault()
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

    function removeTask(task){
        setTasks(tasks.filter(currentTask => currentTask.id !== task.id))
        setCompleteTaskPoints(completeTaskPoints - task.weight)
    }

    function completeTask(task){
        setTasks(tasks.filter(currentTask => currentTask.id !== task.id))
        setCompleteTaskPoints(completeTaskPoints + task.weight)
    }

    return (
        <div className="App">
            <MyInput placeholder='Enter your title'
                   value={task.title}
                   onChange={event => setTask({...task, title: event.target.value})}/>
            <MyInput placeholder='Enter your description'
                   value={task.description}
                   onChange={event => setTask({...task, description: event.target.value})}/>
            <MyInput placeholder='Choose your day'
                   value={task.timeStamp}
                   onChange={event => setTask({...task, timeStamp: event.target.value})}/>
            <MyButton  onClick={createTask}>Add Task</MyButton>

            <h2>{completeTaskPoints}</h2>

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'monday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'tuesday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'wednesday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'thursday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'friday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'saturday'} tasks={tasks}/>
            }

            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : <TaskList done={completeTask} remove={removeTask} day={'sunday'} tasks={tasks}/>
            }

        </div>
    );
}

export default App;
