<template>
	<ValidationObserver
		v-slot="{ invalid, validated, handleSubmit }"
		slim
	>
		<v-card class="elevation-4">
			<v-toolbar dark color="primary">
				<v-toolbar-title>Register a new account</v-toolbar-title>
			</v-toolbar>
			<v-card-text>
				<v-form>
					<v-row dense>
						<v-col>
							<TextField
								v-model="firstName"
								:counter="10"
								rules="required|max:10"
								label="First Name"
							/>
						</v-col>

						<v-col>
							<TextField
								v-model="lastName"
								:counter="10"
								rules="required|max:10"
								label="Last Name"
							/>
						</v-col>
					</v-row>

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
								rules="required|min:10"
								label="Password"
								type="password"
							/>
						</v-col>
					</v-row>

					<v-row dense>
						<v-col>
							<Select
								v-model="country"
								:items="countryItems"
								rules="required"
								item-text="label"
								item-value="value"
								label="Country"
							/>
						</v-col>
						<v-col>
							<Select
								v-model="state"
								:items="stateItems"
								rules="required"
								item-text="label"
								item-value="value"
								label="State"
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
					Sign Up
				</v-btn>
			</v-card-actions>
		</v-card>
	</ValidationObserver>
</template>

<script>
	import { ValidationObserver } from 'vee-validate';
	import TextField from './Fields/TextField.vue';
	import Select from './Fields/Select.vue';

	export default {
		components: {
			ValidationObserver,
			TextField,
			Select,
		},
		data() {
			return {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				country: '',
				state: '',
				countryItems: [
					{
						label: 'Brazil',
						value: 'br',
					},
				],
				stateItems: [
					{
						label: 'Sao Paulo',
						value: 'sp',
					},
				],
			};
		},
		methods: {
			submit() {
				console.log('Form Submitted');
			},
		},
	};
</script>
