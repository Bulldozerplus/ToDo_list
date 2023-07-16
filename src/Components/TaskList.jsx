import React, {useState} from 'react';


const TaskList = ({editCurrentTask,removeTask, day, tasks, toggleComplete}) => {
    const [editList, setEditList] = useState(null)
    const [editTask, setEditTask] = useState({
        title: '',
        description: '',
        timeStamp: ''
    })

    return (
        <div>
            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : tasks.filter(days => days.timeStamp === day).map((task, index) => (
                    editList === task.id
                        ?  <form>
                            <input value={editTask.title} placeholder='edit the title' onChange={event => setEditTask({...editTask, title: event.target.value})}/>
                            <input value={editTask.description} placeholder='edit the description' onChange={event => setEditTask({...editTask, description: event.target.value})}/>
                            <input value={editTask.timeStamp} placeholder='edit the day' onChange={event => setEditTask({...editTask, timeStamp: event.target.value})}/>
                            <button onClick={() => editCurrentTask(editTask, task.id)}>Add editors</button>
                        </form>
                        : <>
                            <h3>{index + 1}. {task.title}</h3>
                            <p>{task.description}</p>
                            <h4>{task.timeStamp}</h4>
                            <input type="checkbox" onClick={() => toggleComplete(task.id)} checked={task.isDone}/>
                            <button onClick={() => removeTask(task)}>Delete</button>
                            <button onClick={() => setEditList(task.id) }>Edit task</button>
                        </>
                ))}

        </div>
    );
};

export default TaskList;