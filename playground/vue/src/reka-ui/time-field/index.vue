<script setup lang="ts">
import type {
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from "@internationalized/date";
import type { TimeFieldRootProps } from "reka-ui";
import { TimeFieldInput, TimeFieldRoot } from "reka-ui";
import Label from "../label/index.vue";

const props = defineProps<{
  timeFieldProps?: TimeFieldRootProps;
  emits?: {
    "onUpdate:modelValue"?: (
      data: Time | CalendarDateTime | ZonedDateTime
    ) => void;
  };
}>();
</script>

<template>
  <Label for="time-field" data-testid="label"> Label</Label>
  <TimeFieldRoot
    v-bind="props.timeFieldProps"
    id="time-field"
    v-slot="{ segments, modelValue }"
    data-testid="input"
    v-on="{ 'update:modelValue': props.emits?.['onUpdate:modelValue'] }"
  >
    <TimeFieldInput
      v-for="item in segments"
      :key="item.part"
      :part="item.part"
      :data-testid="item.part === 'literal' ? undefined : item.part"
    >
      {{ item.value }}
    </TimeFieldInput>

    <span data-testid="value" tabindex="-1" disabled>{{ modelValue }}</span>
  </TimeFieldRoot>
</template>
