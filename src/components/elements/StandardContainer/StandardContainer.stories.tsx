import { ComponentMeta, Story } from "@storybook/react";
import { createContext, useContext } from "react";
import { theme } from "src/theme";
import { StandardContainer, StandardContainerProps } from "./StandardContainer";
import { setup, styled } from 'goober';
import React from "react";

export default {
    title: 'StandardContainer',
    component: StandardContainer,
} as ComponentMeta<typeof StandardContainer>;

const Template: Story<StandardContainerProps> = (args) => {
    return (
        <StandardContainer {...args}>
            Hello there
        </StandardContainer>
    );
};


export const Primary = Template.bind({});

Primary.args = {
    hasRoundedEdges: true,
}