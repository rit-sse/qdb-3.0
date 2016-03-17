import api from '../api';

export const LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS';
export const LOAD_TAGS_FAILED = 'LOAD_TAGS_FAILED';

function loadTagsSuccess(tags) {
  return {
    type: LOAD_TAGS_SUCCESS,
    tags,
  };
}

function loadTagsFailed(error) {
  return {
    type: LOAD_TAGS_FAILED,
    error,
  };
}

export function loadTags() {
  return dispatch => {
    return api.Tags.all({}, true)
      .then(data => dispatch(loadTagsSuccess(data)))
      .catch(error => dispatch(loadTagsFailed(error)));
  };
}
