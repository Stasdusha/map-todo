import React from "react";

const ResultTask =(props)=> {


  return (
       <div className='result-task'>
         <div className='title-block'>NEW TASK</div>
         <div className='task-info' >I need a { props.task.serviceType } to { props.task.adittionType }
         { props.task.description ? ', ' : ''}
         { props.task.description }. </div>
        <div>My adress is { props.adress }</div>
        <button className="button-blue" onClick={ props.createTask }>CREATE TASK</button>
       </div>
   );
}
ResultTask.prototype.shouldComponentUpdate = (nextProps, nextState) => {
  console.log(nextProps);
  return true;
}

export default ResultTask;
