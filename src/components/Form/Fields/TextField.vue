<template>
	<ValidationProvider
		v-slot="{ errors, valid }"
		:name="$attrs.label"
		:rules="rules"
	>
		<v-text-field
			v-model="innerValue"
			:success="valid"
			:error-messages="errors"
			v-bind="$attrs"
		/>
	</ValidationProvider>
</template>
<script>
	import { ValidationProvider } from 'vee-validate';

	import { formFieldsMixin } from '@/mixins';

	export default {
		name: 'TextField',
		components: {
			ValidationProvider,
		},
		mixins: [formFieldsMixin],
	};
</script>
