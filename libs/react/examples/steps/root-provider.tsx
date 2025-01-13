import { Steps, useSteps } from "@ark-ui/react/steps";
import { stepsStyledSlots as minimal } from "@spark-css/theme-minimal";
import { stepsStyledSlots as park } from "@spark-css/theme-park";
import { stepsStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

const items = [
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" }
];

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const steps = useSteps({ count: items.length });

  return (
    <>
      <button type="button" onClick={() => steps.resetStep()}>
        Reset
      </button>

      <Steps.RootProvider value={steps}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
        {items.map((item, index) => (
          <Steps.Content key={index} index={index}>
            {item.title} - {item.description}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>
        <div>
          <Steps.PrevTrigger>Back</Steps.PrevTrigger>
          <Steps.NextTrigger>Next</Steps.NextTrigger>
        </div>
      </Steps.RootProvider>
    </>
  );
};
