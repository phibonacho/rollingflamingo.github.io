import React from "react";
import PersonCard from "../person-card/PersonCard";

export default class MyCard extends React.Component<any, any> {
  public render() {
    return (
      <PersonCard
        title={'Andrea Storace'}
        descriptions={[
          'Computer Science Bachelor Graduate',
          'Software Engineer Student',
          'Junior Web Developer'
        ]}
        featuredLinks={[
          {
            url: 'https://github.com/rollingflamingo',
            icon: ['fab', 'github'],
            alt: 'Github Profile'
          },
          {
            url: 'https://www.linkedin.com/in/andrea-storace-73b9b9103/',
            icon: ['fab', 'linkedin'],
            alt: 'Linkedin profile'
          }
        ]}
      />
    );
  }
}
