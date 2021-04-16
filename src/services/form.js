import Schemas from '@/assets/schemas';

export default {
	getForm(formId) {
		return new Promise(resolve => resolve(Schemas[formId]));
	},
};
