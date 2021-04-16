<template>
	<ValidationObserver
		v-slot="{ invalid, validated, handleSubmit }"
		slim
	>
		<v-card class="elevation-4">
			<v-toolbar dark color="primary">
				<v-toolbar-title>Welcome to EC</v-toolbar-title>
			</v-toolbar>
			<v-card-text>
				<Form formId="signin" />
			</v-card-text>
			<v-card-actions>
				<v-btn
					:disabled="invalid || !validated"
					color="primary"
					@click="handleSubmit(submit)"
				>
					Sign In
				</v-btn>
			</v-card-actions>
		</v-card>
	</ValidationObserver>
</template>

<script>
	import { ValidationObserver } from 'vee-validate';
	import { mapState } from 'vuex';

	import Form from './Form.vue';

	export default {
		components: {
			ValidationObserver,
			Form,
		},
		computed: {
			...mapState('Form', {
				formData: state => state.formData?.signin,
			}),
		},
		methods: {
			submit() {
				console.log('Form Submitted', this.formData);
			},
		},
	};
</script>
