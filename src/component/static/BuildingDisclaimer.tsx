import React from "react";
import Disclaimer from "../disclaimer/Disclaimer";
import StepList from "../step-list/StepList";
import ThemeContext from "../theme/ThemeContext";

export default class BuildingDisclaimer extends React.Component<any, any> {
  static contextType = ThemeContext;

  public render() {
    return (<Disclaimer title={'Page under construction!'}>
      <p>This should be a personal page, I'm building it in my free time so it will take a while, here's what I've accomplished so far:</p>
      <StepList steps={
        [
          'Github repository setup',
          'React project setup, this had to been done twice, since the first time I forgot to set the language to typescript... My bad.',
          'Configured Github Pages deploy, this was a bit tricky but it actually do no more than to commit production build into gh-pages branch.',
          'Initial page setup, which is what you\'re currently viewing, I swear it\'ll get better.',
          'Added Responsive layout.',
          'Enhanced Hero Banner background optimization (kind of).',
          'Added theming (light and dark).',
          'Added theme switcher and Navbar (a very hideous one).'
        ]
      }
      />
    </Disclaimer>);
  }
}
