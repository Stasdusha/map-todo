import React from "react";

const ResultTask =(props)=> {

  return (
       <div className='result-task'>
         <div className='title-block'>NEW TASK</div>
         <div className='result-task__info' >I need a <b>
           { props.task.serviceType }</b> to <b>
           { props.task.adittionType }</b>
         { props.task.description ? ', ' : ''}
         <b>{ props.task.description }</b>. </div>
        <div>My adress is { props.adress }</div>
        <button className="button button_blue button_m" onClick={ props.createTask }>
          { !props.task.id ? 'CREATE TASK' : 'EDIT TASK'}
        </button>
       </div>
   );
}
ResultTask.prototype.shouldComponentUpdate = (nextProps, nextState) => {
  console.log(nextProps);
  return true;
}

export default ResultTask;
