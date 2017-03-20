import {SET_CURENT_MARKER} from './../constants/constant'

export default function curentMarker(state = {}, action) {

  switch (action.type) {
    case SET_CURENT_MARKER:
      return Object.assign(action.marker)

    default:
      return state;
  }

}
