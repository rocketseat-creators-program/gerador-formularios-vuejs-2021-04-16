import Schemas from '@/assets/schemas';

export default {
	getForm(formId) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Schemas[formId]);
			}, 1000);
		});
	},
};
