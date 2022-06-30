import { ComponentMeta } from "@storybook/react";
import { Button } from "src/stories/Button";
import { CurrentSlideIndicator } from "./CurrentSlideIndicator";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Current Slide Indicator',
  component: Button,
} as ComponentMeta<typeof Button>;


export const Primary = () => (
  <CurrentSlideIndicator currentIndex={0} pageCount={3} />);