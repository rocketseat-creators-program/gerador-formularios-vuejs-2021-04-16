<template>
	<ValidationProvider
		v-slot="{ errors }"
		:name="$attrs.label"
		:rules="rules"
	>
		<v-select
			v-model="innerValue"
			:error-messages="errors"
			v-bind="$attrs"
		/>
	</ValidationProvider>
</template>

<script>
	import { ValidationProvider } from 'vee-validate';

	import { formFieldsMixin } from '@/mixins';

	export default {
		name: 'Select',
		components: {
			ValidationProvider,
		},
		mixins: [formFieldsMixin],
	};
</script>
