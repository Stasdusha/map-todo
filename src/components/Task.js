import React from "react";

const Task =(props)=> {

  return (
       <div className='task'>
         <div>{props.description}</div>
       </div>
   );
}

export default Task;
