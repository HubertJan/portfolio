import { ComponentMeta } from "@storybook/react";
import { PortfolioProjectTemplate } from "./PortfolioProjectTemplate";


export default {

  title: 'PortfolioProjectTemplate',
  component: PortfolioProjectTemplate,
} as ComponentMeta<typeof PortfolioProjectTemplate>;


export const Primary = () => (
  <PortfolioProjectTemplate />);