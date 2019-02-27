import * as types from '../constants/actionTypes';

function getDataFulfilledAction(payload, category) {
  return {
    type: types.GET_DATA_FULFILLED,
    category, 
    payload
  };
}

export function getIdeas() {
  return dispatch => {
    return dispatch(
      getDataFulfilledAction(JSON.parse(localStorage.getItem('ideas')), 'ideas')
    );
  };
}

export function setIdea(title, description) {
  const ideas = JSON.parse(localStorage.getItem('ideas')) || {};
  let newObjIndex = ideas && Object.keys(ideas).length ? Object.keys(ideas).length +1 : 1;
  ideas[newObjIndex] = {};
  ideas[newObjIndex]['id'] = newObjIndex;
  ideas[newObjIndex]['title'] = title;
  ideas[newObjIndex]['description'] = description;
  ideas[newObjIndex]['createdAt'] = Date.now();
  ideas[newObjIndex]['updatedAt'] = Date.now();

  localStorage.setItem('ideas', JSON.stringify(ideas))
  return dispatch => {
    return dispatch(
      getDataFulfilledAction(JSON.parse(localStorage.getItem('ideas')), 'ideas')
    );
  };
}

export function updateIdeaById(id, field, value) {
  const ideas = JSON.parse(localStorage.getItem('ideas'));
  ideas[id][field] = value;
  ideas[id]['updatedAt'] = Date.now();
  localStorage.setItem('ideas', JSON.stringify(ideas))
  return dispatch => {
    return dispatch(
      getDataFulfilledAction(JSON.parse(localStorage.getItem('ideas')), 'ideas')
    );
  };
}

export function deleteIdeaById(id) {
  const ideas = JSON.parse(localStorage.getItem('ideas'));
  delete ideas[id];
  localStorage.setItem('ideas', JSON.stringify(ideas))
  return dispatch => {
    return dispatch(
      getDataFulfilledAction(JSON.parse(localStorage.getItem('ideas')), 'ideas')
    );
  };
}
