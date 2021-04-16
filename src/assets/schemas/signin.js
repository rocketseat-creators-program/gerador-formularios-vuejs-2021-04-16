export const signin = {
	grid: [
		'email',
		'password',
	],
	components: [
		{
			component: 'TextField',
			id: 'email',
			rules: 'required|email',
			properties: {
				label: 'E-mail',
			},
		},
		{
			component: 'TextField',
			id: 'password',
			rules: 'required',
			properties: {
				label: 'Password',
				type: 'password',
			},
		},
	],
};
