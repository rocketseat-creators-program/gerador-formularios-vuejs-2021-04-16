<template>
	<v-form v-if="isValidForm">
		<v-row
			v-for="(row, index) in formGrid"
			:key="index"
			dense
		>
			<v-col v-for="(col) in row" :key="col.id">
				<component
					:is="col.component"
					:value="formData[col.id]"
					:rules="col.rules"
					v-bind="col.properties"
					@input="updateField(col, $event)"
				/>
			</v-col>
		</v-row>
	</v-form>
	<div v-else class="text-center">
		<v-progress-circular indeterminate color="primary" />
	</div>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex';
	import * as mutations from '@/store/modules/form/mutations';

	import TextField from './Fields/TextField.vue';
	import Select from './Fields/Select.vue';

	export default {
		components: {
			TextField,
			Select,
		},
		props: {
			formId: String,
		},
		computed: {
			...mapState('Form', {
				appFormGrid: state => state.formGrid,
				appFormData: state => state.formData,
			}),
			formGrid() {
				return this.appFormGrid?.[this.formId];
			},
			formData() {
				return this.appFormData?.[this.formId];
			},
			isValidForm() {
				return !!this.formGrid && !!this.formData;
			},
		},
		created() {
			this.mountForm(this.formId);
		},
		methods: {
			...mapActions('Form', ['mountForm']),
			...mapMutations('Form', {
				updateFormField: mutations.UPDATE_FORM,
			}),
			updateField(col, event) {
				this.updateFormField({
					formId: this.formId,
					field: {
						id: col.id,
						value: event,
					},
				});
			},
		},
	};
</script>
