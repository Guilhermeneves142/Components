<template>
  <span class="badge" :class="props.color">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">

/* Props */
interface Props {
  color: Color.Color
}
const props = withDefaults(defineProps<Props>(), {
  color: "primary"
})
</script>

<style scoped>
.badge {
  @apply inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset;
}
.badge.primary{
  @apply text-primary ring-primary bg-primary;
}
.badge.secondary{
  @apply text-secondary ring-secondary bg-secondary;
}
.badge.tertiary{
  @apply text-tertiary ring-tertiary bg-tertiary;
}
.badge.success{
  @apply text-success ring-success bg-success;
}
.badge.error{
  @apply text-error ring-error bg-error;
}
.badge.neutral{
  @apply text-neutral ring-neutral bg-neutral;
}
</style>