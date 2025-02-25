import { HoverCard } from "@ark-ui/solid/hover-card";
import { Portal } from "solid-js/web";

export const RenderProp = () => (
  <HoverCard.Root>
    <HoverCard.Context>
      {(context) => <HoverCard.Trigger>Hover me {context().open ? "▲" : "▼"} </HoverCard.Trigger>}
    </HoverCard.Context>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
);
