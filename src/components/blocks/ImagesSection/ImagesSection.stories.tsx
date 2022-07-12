import { ComponentMeta } from "@storybook/react";
import { useTheme } from "src";
import { ImagesSection } from "./ImagesSection";


export default {
    title: 'ImagesSection',
    component: ImagesSection,
} as ComponentMeta<typeof ImagesSection>;


export const Primary = () => {
    const theme = useTheme();
    const images = [
        'http://placeimg.com/1200/800/nature',
        'http://placeimg.com/800/1200/nature',
        'http://placeimg.com/1920/1080/nature',
        'http://placeimg.com/1500/500/nature',
    ];
    return (<ImagesSection
    imageUrls={images}
    />
    );

};