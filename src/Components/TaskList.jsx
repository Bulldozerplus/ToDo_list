import React from 'react';


const TaskList = ({completeTask, removeTask, day, tasks}) => {

    return (
        <div>
            {tasks.length === 0
                ? <h2>Tasks not found</h2>
                : tasks.filter(days => days.timeStamp === day).map((task, index) => (
            <>
                <h3>{index + 1}. {task.title}</h3>
                <p>{task.description}</p>
                <h4>{task.timeStamp}</h4>
                <button onClick={() => completeTask(task) }>Done</button>
                <button onClick={() => removeTask(task)} >Delete</button>
            </>
            ))}

        </div>
    );
};

export default TaskList;