export const signup = {
	grid: [
		'firstName lastName',
		'email',
		'password',
		'country state',
	],
	components: [
		{
			component: 'TextField',
			id: 'firstName',
			rules: 'required|max:10',
			properties: {
				label: 'First Name',
				counter: 10,
			},
		},
		{
			component: 'TextField',
			id: 'lastName',
			rules: 'required|max:10',
			properties: {
				label: 'Last Name',
				counter: 10,
			},
		},
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
			rules: 'required|min:10',
			properties: {
				label: 'Password',
				type: 'password',
			},
		},
		{
			component: 'Select',
			id: 'country',
			rules: 'required',
			properties: {
				label: 'Country',
				items: [
					{
						label: 'Brazil',
						value: 'br',
					},
				],
				'item-text': 'label',
				'item-value': 'value',
			},
		},
		{
			component: 'Select',
			id: 'state',
			rules: 'required',
			properties: {
				label: 'State',
				items: [
					{
						label: 'Sao Paulo',
						value: 'sp',
					},
				],
				'item-text': 'label',
				'item-value': 'value',
			},
		},
	],
};
