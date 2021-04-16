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
	import { mapState, mapActions, mapMutations } from 'vuex';
	import * as mutations from '@/store/modules/form/mutations';

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
				formId: 'signup',
			};
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
			this.mountForm('signup');
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
			submit() {
				console.log('Form Submitted', this.formData);
			},
		},
	};
</script>
