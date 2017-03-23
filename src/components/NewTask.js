import React from "react";

const NewTask =(props)=> {

  return (
       <div className='new-task' onClick={props.setCurentTask}>
         <span className='new-task__text'>+ NEW TASK</span>
       </div>
   );
}
export default NewTask;
