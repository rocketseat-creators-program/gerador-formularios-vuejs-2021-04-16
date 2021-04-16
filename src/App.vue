<template>
	<v-app>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md6>
					<v-tabs v-model="tab">
						<v-tab>Sign In</v-tab>
						<v-tab>Sign Up</v-tab>
					</v-tabs>
					<v-tabs-items v-model="tab">
						<v-tab-item class="pa-5">
							<SignInForm />
						</v-tab-item>
						<v-tab-item class="pa-5">
							<SignUpForm />
						</v-tab-item>
					</v-tabs-items>
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
	import SignInForm from './components/Form/SignIn.vue';
	import SignUpForm from './components/Form/SignUp.vue';

	export default {
		name: 'App',
		components: {
			SignInForm,
			SignUpForm,
		},
		data() {
			return {
				tab: null,
			};
		},
	};
</script>
