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
				<v-form>
					<v-row dense>
						<v-col>
						</v-col>
					</v-row>

					<v-row dense>
						<v-col>
						</v-col>
					</v-row>
				</v-form>
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

	export default {
		components: {
			ValidationObserver,
		},
		data() {
			return {};
		},
		methods: {
			submit() {
				console.log('Form Submitted');
			},
		},
	};
</script>
