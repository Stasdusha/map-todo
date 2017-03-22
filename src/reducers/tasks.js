import { CREATE_TASK, DELETE_TASK, EDIT_TASK, SET_TASK_LIST } from './../constants/constant'

export default function tasks(state = [], action) {

  switch (action.type) {

    case SET_TASK_LIST:
      return [...action.tasks];

    case CREATE_TASK:
      return [...state, action.task];

    case DELETE_TASK:
        return state.filter((task)=> action.task.id !== task.id);

    case EDIT_TASK:
        return state.map((task)=> action.task.id !== task.id ?
         Object.assign({}, task) : Object.assign({}, action.task));
    default:
      return state;
  }

}
