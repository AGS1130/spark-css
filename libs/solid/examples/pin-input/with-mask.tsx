import { PinInput } from "@ark-ui/solid/pin-input";
import { Index } from "solid-js";

export const WithMask = () => (
  <PinInput.Root mask>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Control>
      <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
);