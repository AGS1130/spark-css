import { Progress } from "@ark-ui/solid/progress";

export const Indeterminate = () => (
  <Progress.Root value={null}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
);
