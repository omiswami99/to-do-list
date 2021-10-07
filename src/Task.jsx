import React from 'react';

const Task = (props) =>{
    return(
        <>
        <div className='todo_style'>
            <i className="fa fa-trash" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id);
                }}>
            </i>
            <li>
                {props.task}
            </li>
            </div>
        </>
    );
}

export default Task;