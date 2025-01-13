import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { toggleGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { toggleGroupStyledSlots as park } from "@spark-css/theme-park";
import { toggleGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <ToggleGroup.Root defaultValue={["b"]}>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
