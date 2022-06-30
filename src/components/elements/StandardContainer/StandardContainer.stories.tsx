import { ComponentMeta } from "@storybook/react";
import { createContext, useContext } from "react";
import { theme } from "src/theme";
import { StandardContainer } from "./StandardContainer";
import { setup, styled } from 'goober';
import React from "react";

export default {
    title: 'StandardContainer',
    cponent: StandardContainer,
} as ComponentMeta<typeof StandardContainer>;


export const Primary = () => {


    return (<StandardContainer>Hello there</StandardContainer>);
};