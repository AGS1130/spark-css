import { RatingGroup } from "@ark-ui/solid/rating-group";
import { StarHalfIcon, StarIcon } from "lucide-solid";
import { Index } from "solid-js";

export const HalfRatings = () => (
  <RatingGroup.Root count={5} value={3} allowHalf>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context>
        {(context) => (
          <Index each={context().items}>
            {(index) => (
              <RatingGroup.Item index={index()}>
                <RatingGroup.ItemContext>
                  {(context) =>
                    context().half ? (
                      <StarHalfIcon fill="current" />
                    ) : context().highlighted ? (
                      <StarIcon fill="current" />
                    ) : (
                      <StarIcon />
                    )
                  }
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            )}
          </Index>
        )}
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
);
