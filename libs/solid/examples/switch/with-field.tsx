import { Field } from "@ark-ui/solid/field";
import { Switch } from "@ark-ui/solid/switch";

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
);
