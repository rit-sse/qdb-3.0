import { GET_TAGS_SUCCESS } from '../actions/tags';

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name ) {
    return 1;
  }
  return 0;
}

export default function tags(state = [], action) {
  switch (action.type) {
  case GET_TAGS_SUCCESS:
    action.tags.sort(compare);
    return action.tags;
  default:
    return state;
  }
}
