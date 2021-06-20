import React from "react";
import PersonCard from "../person-card/PersonCard";

export default class MyCard extends React.Component<any, any> {
  public render() {
    return (
      <PersonCard
        title={'It\'s-a me, Andreo!'}
        descriptions={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae. Donec vitae posuere erat. In congue lacus a purus congue feugiat. Aenean in mauris quis ipsum eleifend feugiat nec ac nibh.\n',
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
