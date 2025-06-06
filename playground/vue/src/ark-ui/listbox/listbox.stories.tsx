import type { Meta, StoryObj } from "@storybook/vue3";
import SbBasic from "./index.vue";

type Story = StoryObj;

export default {
  title: "Ark UI / Listbox"
} satisfies Meta;

export const Basic: Story = {
  render: () => ({
    components: { SbBasic },
    template: "<sb-basic />"
  })
};
