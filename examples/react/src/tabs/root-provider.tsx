import { Tabs, useTabs } from "@ark-ui/react/tabs";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tabsStyles, park: park.tabsStyles, shadcn: shadcn.tabsStyles },
    theme
  );
  const tabs = useTabs();

  return (
    <>
      <button type="button" onClick={() => tabs.focus()}>
        Focus
      </button>

      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="react">React</Tabs.Trigger>
          <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
          <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="react">React Content</Tabs.Content>
        <Tabs.Content value="vue">Vue Content</Tabs.Content>
        <Tabs.Content value="solid">Solid Content</Tabs.Content>
      </Tabs.RootProvider>
    </>
  );
};
