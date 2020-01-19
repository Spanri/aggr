<template>
	<div class="ui-input-wrapper">
		<input
			v-model="inputValue"
			class="ui-input"
			:class="{
				'ui-input__status_error': v.$anyDirty && v.$invalid,
				'ui-input__status_success': !v.$invalid && isFocus,
			}"
			@focus="isFocus = true"
			@blur="isFocus = false"
			:type="type ? type : 'text'"
			:placeholder="placeholder ? placeholder : ''"
		/>
		<div class="ui-input__error" v-show="v.$invalid">{{ errorDescription }}</div>
	</div>
</template>

<script>
export default {
	name: "UiInput",

	props: {
		/**
		 * Значение, вводимое в инпут
		 */
		value: {
			type: String,
			require: true,
		},

		/**
		 * Объект с валидацией значения из value
		 */
		v: {
			type: Object,
			require: true,
		},

		/**
		 * Описание ошибки
		 */
		errorDescription: {
			type: String,
			default: "",
		},

		type: String,
		placeholder: String,
	},

	data() {
		return {
			isFocus: false,
		};
	},

	computed: {
		inputValue: {
			get() {
				return this.value;
			},
			set(value) {
				this.v.$touch();
				this.$emit("input", value);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-input {
	margin: 0 auto;
	// width: 300px;
	border: 0;
	border-radius: 0;
	border-bottom: 2px solid $gray-lightest;
	padding: 10px 0;

	&__error {
		// margin: 0 auto;
		// width: 300px;
		color: $red;
		margin-top: 10px;
		text-align: left;
	}

	&__status {
		&_error {
			border-bottom-color: $red;
		}

		&_success {
			border-bottom-color: $green;
		}
	}

	&:focus {
		// border: 0;
		box-shadow: 0;
	}

	&::placeholder {
		color: $gray;
	}

	&:-webkit-autofill {
		-webkit-text-fill-color: rgb(52, 42, 199) !important;
	}
}
</style>
