import React from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { connect } from 'react-redux';
import fireWorker from './../services/firebaseWorker';
import { SET_CURENT_TASK, SET_CURENT_MARKER,
        DELETE_TASK, SET_TASK_LIST } from './../constants/constant';

class TaskList extends React.Component {

   setCurentTask (){
    const activeTask = {
      active : true,
      serviceType : 'Electrican',
      adittionType : 'Screw in a light bulb'
      };
    this.props.setTask(activeTask);
  };

   setMarker(marcer){
    if(!this.props.curentTask.active){
      this.props.setMarker(marcer)
    }
  };

   deleteTask (task){
    fireWorker.deleteTask(task).then(this.props.deleteTask(task));
    if(this.props.curentTask.id === task.id){
      this.props.setTask();
    }
  };

  componentDidMount(){
    fireWorker.getTasks().then((tasks)=>{
      console.log(tasks.val().map((t, index) => t))
    });
  }

  render(){
    return (
         <div className='task-list'>
           { this.props.curentMarker.latLng ? <NewTask setCurentTask={ this.setCurentTask.bind(this)}/> :"" }
           { this.props.tasks.map((task, index)=>{
             return(
             <Task key={index} task={task} setMarker={ ()=>this.setMarker(task.marker) } editTask={ this.props.setTask }
               deleteTask={ this.deleteTask.bind(this) }/>
             )})}
         </div>
     );
   }
}

export default connect(state => ({
    curentMarker: state.curentMarker,
    curentTask: state.curentTask,
    tasks  : state.tasks
  }),
    dispatch => ({
    setTask: (task) => {
      dispatch({ type: SET_CURENT_TASK, task: task })
    },
    setMarker: (marker) => {
      dispatch({ type: SET_CURENT_MARKER, marker: marker })
    },
    deleteTask: (task) => {
      dispatch({ type: DELETE_TASK, task: task})
    },
    setTaskList: (tasks) => {
      dispatch({ type: SET_TASK_LIST, task: tasks})
    }
  })
)(TaskList);
