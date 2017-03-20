import React from "react";

const TaskDescription =(props)=> {

const change =()=>{
  const desc = document.querySelector('#desc').value
  props.changeDescription(desc)
}
  return (
       <div className='task-description'>
         <div>TASK DESCRIPTION</div>
         <textarea id="desc" onChange={change}  maxLength="100"/>
       </div>
   );
}

export default TaskDescription;
