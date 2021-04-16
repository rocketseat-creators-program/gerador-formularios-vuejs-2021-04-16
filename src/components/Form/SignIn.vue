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
							<TextField
								v-model="email"
								rules="required|email"
								label="E-mail"
							/>
						</v-col>
					</v-row>

					<v-row dense>
						<v-col>
							<TextField
								v-model="password"
								rules="required"
								label="Password"
								type="password"
							/>
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

	import TextField from './Fields/TextField.vue';

	export default {
		components: {
			ValidationObserver,
			TextField,
		},
		data() {
			return {
				email: '',
				password: '',
			};
		},
		methods: {
			submit() {
				console.log('Form Submitted');
			},
		},
	};
</script>
