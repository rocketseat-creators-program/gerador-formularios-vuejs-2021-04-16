export const FORM_GRID = 'SET_FORM_GRID';
export const FORM_DATA = 'SET_FORM_DATA';
export const UPDATE_FORM = 'SET_UPDATE_FORM';

export default {
	[FORM_GRID](state, payload) {
		state.formGrid = {
			...state.formGrid,
			[payload.formId]: [
				...payload.formGrid,
			],
		};
	},
	[FORM_DATA](state, payload) {
		state.formData = {
			...state.formData,
			[payload.formId]: {
				...payload.formData,
			},
		};
	},
	[UPDATE_FORM](state, payload) {
		state.formData = {
			...state.formData,
			[payload.formId]: {
				...state.formData[payload.formId],
				[payload.field.id]: payload.field.value,
			},
		};
	},
};
