import {CREATE_TASK} from './../constants/constant'

export default function tasks(state = [], action) {

  switch (action.type) {
    case CREATE_TASK:
    console.log(state);
      return [...state, action.task]

    default:
      return state;
  }

}
