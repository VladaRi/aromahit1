<template>
  <div :class="{ 'error': haveError }" class="styled-input">
    <label class="label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :name="name"
      class="input"
      v-mask="mask"
    >
  </div>
</template>

<script>
  export default {
    name: 'StyledInput',
    props: {
      type: {
        default: 'text'
      },
      value: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: null
      },
      required: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: ''
      },
      haveError: {
        type: Boolean,
        default: false
      },
      mask: {
        default: ''
      },
      name: {
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.styled-input {
  .label {
    display: block;
    padding-bottom: 10px;
    font-weight: 600;
    font-size: 19px;
    text-transform: uppercase;

    @include r-max(1500) {
      font-size: 17px;
    }
  }

  .input {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid $brown-light;
    font-family: "Cormorant", sans-serif;
    font-size: 18px;
    font-weight: 600;
    caret-color: $txt-color-brown;
  }

  &.error {
    .input {
      border-color: #ed1414;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
}
</style>