<template>
    <div class="ui-kit">
        <details class="ui-kit__input ui-kit__details">
            <summary class="ui-kit__summary">Input</summary>
            <div class="ui-kit__content">
                <Input />
            </div>
        </details>
        <details class="ui-kit__button ui-kit__details">
            <summary class="ui-kit__summary">Button</summary>
            <div class="ui-kit__content">
                <Button>КНОПКА</Button>
            </div>
        </details>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "UiKit",

    components: {
        Input: () => import("@/ui-components/Input.vue"),
        Button: () => import("@/ui-components/Button.vue"),
    },

    validations: {

    },
});
</script>

<style lang="scss" scoped>
.ui-kit {
    margin: 30px auto;
    padding: 0 30px;
    max-width: 1440px;

    &__details {
        font-size: 18px;
        margin-bottom: 20px;

        &:hover {
            cursor: pointer;
        }
    }

    &__content {
        margin: 10px;
    }
}
</style>