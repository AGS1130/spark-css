import { NumberInput } from "@ark-ui/solid/number-input";

export const Formatted = () => (
  <NumberInput.Root
    formatOptions={{
      style: "currency",
      currency: "USD"
    }}
  >
    <NumberInput.Scrubber />
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
      <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
);
