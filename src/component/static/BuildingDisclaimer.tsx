import React from "react";
import Disclaimer from "../disclaimer/Disclaimer";
import StepList from "../step-list/StepList";

export default class BuildingDisclaimer extends React.Component<any, any> {
  public render() {
    return (<Disclaimer title={'Page under construction!'}>
      <p>This should be a personal page, I'm building it in my free time so it will take a while, here's what I've accomplished so far:</p>
      <StepList steps={
        [
          'Github repository setup',
          'React project setup, this has been twice done since the first time I forgot to set the language to typescript... My bad.',
          'Github Pages deploy, this was a bit tricky but it actually do not more then commit production build into gh-pages branch and then push to origin.',
          'Initial page setup, which is what you\'re currently viewing, I swear it\'ll get better.',
          'Responsive layout.'
        ]
      }
      />
    </Disclaimer>);
  }
}
