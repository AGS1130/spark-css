import { Menu } from "@ark-ui/react/menu";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menuStyles, park: park.menuStyles, shadcn: shadcn.menuStyles },
    theme
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Trigger from the outside
      </button>
      <Menu.Root open={isOpen}>
        <Menu.Trigger className={clsx(styledSlots.trigger)}>
          Open menu <Menu.Indicator className={clsx(styledSlots.indicator)}>➡️</Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner className={clsx(styledSlots.positioner)}>
          <Menu.Content className={clsx(styledSlots.content)}>
            <Menu.Item value="react" className={clsx(styledSlots.item)}>
              React
            </Menu.Item>
            <Menu.Item value="solid" className={clsx(styledSlots.item)}>
              Solid
            </Menu.Item>
            <Menu.Item value="vue" className={clsx(styledSlots.item)}>
              Vue
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  );
};
