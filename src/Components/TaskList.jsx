import React from 'react';
import MyButton from "./MyButton";

const TaskList = ({done, remove, day, tasks}) => {

    return (
        <div>
            {tasks.filter(days => days.timeStamp === day).map((task, index) => (
            <>
                <h3>{index + 1}. {task.title}</h3>
                <p>{task.description}</p>
                <h4>{task.timeStamp}</h4>
                <MyButton onClick={() => done(task) }>Done</MyButton>
                <MyButton onClick={() => remove(task)} >Delete</MyButton>
            </>
            ))}

        </div>
    );
};

export default TaskList;