import * as React from "react";

import "./project-card.scss";
import Triangle from "../../media/graphics/signature-triangle.svg";

export interface IProjectCardProps {
  main?: boolean;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default class ProjectCard extends React.Component<IProjectCardProps, {}> {
  public render() {
    return <div className={`project-card ${this.props.main? 'main' : ''}`}>
      <img src={this.props.image} className='project-image' alt="project thumbnail"/>
      <div className={'project-info'}>
        <div className='project-detail-wrapper'>
          <h4 className='project-title'>{this.props.title}</h4>
          <p className='project-description'>
            {this.props.description}
          </p>
          <ul className='tags-list'>
            {
              this.props.tags.map((tag,i) => <li key={i} className='tag-item'>
                {tag}
              </li>)
            }
          </ul>

        </div>
        <div className='project-link-wrapper'>
          <a href={this.props.link} className='project-link'>View Project</a>
        </div>
      </div>
    </div>;
  }
}
