<template>
  <div>
    <label :for="idInput">{{ props.label }}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input v-model="model" :id="idInput" class="" v-bind="$attrs"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/* Props */
interface Props {
  label: string,
  modelValue: any
}
const props = withDefaults(defineProps<Props>(),{})
/* Data */
const idInput = String(Date.now());
/* Emit */
const emit = defineEmits<{
  (e: "update:model-value",value: any): void
}>()
/* Computed */
const model = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit("update:model-value",v);
  }
})
</script>

<style scoped>
label {
	@apply block text-sm font-medium leading-6 text-gray-900;
}
input {
  @apply block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 
  ring-1 ring-inset ring-neutral placeholder:text-gray-400 focus:ring-2 
  focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6;
}
</style>