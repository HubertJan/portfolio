import { ComponentMeta } from "@storybook/react";
import { FillScreenContainer } from "src/components/elements/FillScreenContainer/FillScreenContainer";
import { useSliderController } from "src/hooks/useSliderController";
import { SkillsSlide } from "src/routes/DesktopPage/slides/SkillsSlide";
import { SliderList } from "./SliderList";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'SliderList',
    component: SliderList,
} as ComponentMeta<typeof SliderList>;


export const Primary = () => {
    const controller = useSliderController();
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <SliderList sliderController={controller}>
                <p>Hello there</p>
                <p>Hello there</p>
            </SliderList>
        </div>
    )
};