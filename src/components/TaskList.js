import React from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { connect } from 'react-redux';
import { SET_CURENT_TASK } from './../constants/constant';

const TaskList =(props)=> {
console.log(props.newTask);

const setCurentTask =()=>{
  const activeTask = {
    active : true,
    serviceType : 'Electrican',
    adittionType : 'Screw in a light bulb'
    };
  props.setTask(activeTask);
}

  return (
       <div className='task-list'>
         { props.newTask ? <NewTask setCurentTask={setCurentTask}/> :"" }
         { props.tasks.map((task, index)=>{
           return(
           <Task key={index} description={task.description} marker={task.marker}/>
           )})}
       </div>
   );
}


export default connect(state => ({
    newTask: !!state.curentMarker.latLng,
    tasks  : state.tasks
  }),
    dispatch => ({
    setTask: (task) => {
      dispatch({ type: SET_CURENT_TASK, task: task })
    }
  })
)(TaskList);
