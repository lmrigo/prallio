import * as types from '../constants/ActionTypes';
/*
export function saveFuelSavings(settings) {
	return { type: types.SAVE_FUEL_SAVINGS, settings };
}

export function calculateFuelSavings(settings, fieldName, value) {
	return { type: types.CALCULATE_FUEL_SAVINGS, settings, fieldName, value };
}
*/
export function addNewMember(properties) {
	return { type: types.ADD_NEW_MEMBER, member: properties.member};
}

export function addNewActivity(properties) {
	return { type: types.ADD_NEW_ACTIVITY, member: properties.member };
}
