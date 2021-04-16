import mutations from './mutations';
import actions from './actions';

export default {
	namespaced: true,

	state() {
		return {
			formGrid: {},
			formData: {},
		};
	},
	mutations,
	actions,
};
