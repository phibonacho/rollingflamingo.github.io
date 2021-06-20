import * as React from "react";
import ProjectCard, {IProjectCardProps} from "./ProjectCard";

import "./project-archive.scss";

export interface IProjectArchiveProps {
  projects: IProjectCardProps[];
}

export default class ProjectArchive extends React.Component<IProjectArchiveProps, {}> {
  public render() {
    return <div className='projects-archive'>
      {
        this.props.projects.map((project, i) => <ProjectCard key={i} {...project} main={i===0}/>)
      }
    </div>;
  }
}
