import {ADD_NEW_MEMBER, ADD_NEW_ACTIVITY} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
    members: [],
    activities: []
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function managementAppState(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_MEMBER:
      let newMembers = [action.member, ...state.members];
      console.log("Newmembers:");
      console.log(newMembers);
      return objectAssign({}, state, { members: newMembers});
    case ADD_NEW_ACTIVITY:
      let newActivities = state.activities;
      if(state.activities.filter(m => m == action.member).length == 0) {
        newActivities = [action.member, ...state.activities]
      }
      return objectAssign({}, state, { activities: newActivities});
		default:
			return state;
	}
}
