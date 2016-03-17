import { GET_TAGS_SUCCESS } from '../tags';

export default function tags(state = [], action) {
  switch (action.type) {
  case GET_TAGS_SUCCESS:
    return action.tags;
  default:
    return state;
  }
}
