import React from "react";

const Task =(props)=> {

  const setCurentMarker=()=>{
    props.setMarker(props.task.marker)
  }

  return (
       <div className='task' onClick={ setCurentMarker }>
         <div className='task-date'>{ props.task.date.toLocaleString() }</div>
         <div className='task-info'>I need a { props.task.serviceType } to { props.task.adittionType }
         { props.task.description ? ', ' : ''}
         { props.task.description }. </div>
        <div>
          <button className='button-blue' onClick={()=> props.editTask(props.task)}>EDIT</button>
          <button className='button-wite' >DELETE</button>
        </div>
       </div>
   );
}

export default Task;
