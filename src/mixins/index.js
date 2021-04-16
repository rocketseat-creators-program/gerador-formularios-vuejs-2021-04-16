export const formFieldsMixin = {
	inheritAttrs: false,
	data() {
		return {
			innerValue: '',
		};
	},
	props: {
		rules: {
			type: [Object, String],
			default: '',
		},
	},
	watch: {
		innerValue(newValue) {
			this.$emit('input', newValue);
		},
	},
};
