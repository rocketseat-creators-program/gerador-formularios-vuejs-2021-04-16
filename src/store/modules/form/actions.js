import Form from '@/services/form';
import * as types from './mutations';

export default {
	async mountForm({ commit }, formId) {
		const { grid, components } = await Form.getForm(formId);

		// Transforma o array de grid de strings para um array de arrays,
		// onde cada posição é o ID de um componente
		const convertedGrid = grid.map(row => row.split(' ').filter(col => col));

		// Cria o grid do form convertendo cada posição para ter o componente inteiro,
		// não só o seu ID
		const formGrid = convertedGrid.reduce((acc, row) => {
			const componentsGrid = row.map(col => components.find(comp => comp.id === col));
			acc.push(componentsGrid);
			return acc;
		}, []);

		const formData = components.reduce((acc, curr) => {
			acc[curr.id] = curr.value;
			return acc;
		}, {});

		commit(types.FORM_GRID, { formId, formGrid });
		commit(types.FORM_DATA, { formId, formData });
	},
};
