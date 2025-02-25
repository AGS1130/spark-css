import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Fieldset.RootProps & { theme: Theme }) => {
  const fieldset = getTheme(
    { minimal: minimal.fieldsetStyles, park: park.fieldsetStyles, shadcn: shadcn.fieldsetStyles },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.fieldStyles, park: park.fieldStyles, shadcn: shadcn.fieldStyles },
    props.theme
  );

  return (
    <Fieldset.Root {...props} className={clsx(fieldset.root)}>
      <Fieldset.Legend className={clsx(fieldset.legend)}>Legend</Fieldset.Legend>
      <Fieldset.HelperText className={clsx(fieldset.helperText)}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText className={clsx(fieldset.errorText)}>Error text</Fieldset.ErrorText>
      <Field.Root className={clsx(field.root)}>
        <Field.Label className={clsx(field.label)}>Label</Field.Label>
        <Field.Input className={clsx(field.input)} />
        <Field.HelperText className={clsx(field.helperText)}>Field Helper Text</Field.HelperText>
        <Field.ErrorText className={clsx(field.errorText)}>Field Error Text</Field.ErrorText>
      </Field.Root>
    </Fieldset.Root>
  );
};
