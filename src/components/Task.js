import React from "react";

const Task =(props)=> {

  const setCurentMarker=()=>{
    props.setMarker(props.task.marker)
  }

  return (
       <div className='task' onClick={ setCurentMarker }>
         <div className='task__date'>{ props.task.date }</div>
         <div className='task__info'>I need a { props.task.serviceType } to { props.task.adittionType }
         { props.task.description ? ', ' : ''}
         { props.task.description }. </div>
        <div>
          <button className='button button_blue button_s' onClick={()=> props.editTask(props.task)}>EDIT</button>
          <button className='button button_wite button_s_margin' onClick={()=> props.deleteTask(props.task)} >DELETE</button>
        </div>
       </div>
   );
}

Task.propTypes = {
  task:React.PropTypes.object.isRequired,
  editTask:React.PropTypes.func.isRequired,
  deleteTask:React.PropTypes.func.isRequired,
}

export default Task;
