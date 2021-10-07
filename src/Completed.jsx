import React from 'react';

const Completed = (props) =>{
    return(
        <>
        <div className="todo_style">
            <i className="far fa-check-circle"></i>
            <li>
                {props.tasks}
            </li>
        </div>
        </>
    );
}

export default Completed;