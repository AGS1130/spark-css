import { Portal } from "@ark-ui/react/portal";
import { Select, createListCollection } from "@ark-ui/react/select";
import { selectStyledSlots as minimal } from "@spark-css/theme-minimal";
import { selectStyledSlots as park } from "@spark-css/theme-park";
import { selectStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

const SelectAllButton = () => (
  <Select.Context>
    {(api) => (
      <button
        type="button"
        onClick={() => {
          api.selectAll();
          api.setOpen(false);
        }}
      >
        Select All
      </button>
    )}
  </Select.Context>
);

export const SelectAll = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <Select.Root collection={collection}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <SelectAllButton />
            {collection.items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
