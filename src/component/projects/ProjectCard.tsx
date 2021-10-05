import * as React from "react";

import "./project-card.scss";

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
    return <div className={`project-card col-span-6 ${this.props.main? 'main' : 'md:col-span-3 lg:col-span-2'}`}>
      <img src={this.props.image} className='project-image' alt="project thumbnail"/>
      <div className='project-info dark:bg-obsidian'>
        <div className='flex-full flex flex-col mb-2'>
          <h3 className='uppercase font-bold text-obsidian dark:text-light dark:text-white text-2xl text-center w-full line-clamp-1'>{this.props.title}</h3>
          <div className="flex-full flex">
            <p className='self-center text-base text-dark dark:text-white md:line-clamp-8 line-clamp-6'>
              {this.props.description}
            </p>
          </div>
        </div>
        <ul className='flex flex-row pl-0'>
          {
            this.props.tags.map((tag,i) => <li key={i} className='list-none text-muted font-bold text-xs ml-1'>
              {tag}
            </li>)
          }
        </ul>

        <div className='mt-5 text-center'>
          <a href={this.props.link} className='project-link p-4 uppercase text-obsidian dark:text-light font-semibold'>View Project</a>
        </div>
      </div>
    </div>;
  }
}
