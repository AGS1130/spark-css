<script setup lang="ts">
import { Checkbox, useCheckbox } from "@ark-ui/vue/checkbox";
import { default as CheckIcon } from "../icons/check.vue";

const checkbox = useCheckbox();
</script>

<template>
  <span>{{ checkbox.checked ? "Checked" : "UnChecked" }}</span>

  <Checkbox.RootProvider :value="checkbox">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.RootProvider>
</template>
