import api from '../api';

export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_TAGS_FAILED = 'GET_TAGS_FAILED';

function getTagsSuccess(tags) {
  return {
    type: GET_TAGS_SUCCESS,
    tags,
  };
}

function getTagsFailed(error) {
  return {
    type: GET_TAGS_FAILED,
    error,
  };
}

export function getTags() {
  return dispatch => {
    return api.Tags.all({}, true)
      .then(data => dispatch(getTagsSuccess(data)))
      .catch(error => dispatch(getTagsFailed(error)));
  };
}
