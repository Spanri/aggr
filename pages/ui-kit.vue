<template>
    <div class="ui-kit">
        <details class="ui-kit__input ui-kit__details">
            <summary class="ui-kit__summary">Input</summary>
            <div class="ui-kit__content">
                <Input />
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
    },

    validations: {

    },
});
</script>