import { TagsInput, useTagsInput } from "@ark-ui/react/tags-input";
import { tagsInputStyledSlots as minimal } from "@spark-css/theme-minimal";
import { tagsInputStyledSlots as park } from "@spark-css/theme-park";
import { tagsInputStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const tagsInput = useTagsInput();

  return (
    <>
      <button type="button" onClick={() => tagsInput.focus()}>
        Focus
      </button>

      <TagsInput.RootProvider value={tagsInput}>
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label>Frameworks</TagsInput.Label>
              <TagsInput.Control>
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item key={index} index={index} value={value}>
                    <TagsInput.ItemPreview>
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
                  </TagsInput.Item>
                ))}
              </TagsInput.Control>
              <TagsInput.Input placeholder="Add Framework" />
              <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
            </>
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.RootProvider>
    </>
  );
};
