import * as React from "react";
import ProjectCard, {IProjectCardProps} from "./ProjectCard";

import "./project-archive.scss";

export interface IProjectArchiveProps {
  projects: IProjectCardProps[];
}

export default class ProjectArchive extends React.Component<IProjectArchiveProps, {}> {
  public render() {
    return <div className="grid grid-cols-6 gap-3">
      {
        this.props.projects.map((project, i) => <ProjectCard key={i} {...project} main={i===0}/>)
      }
    </div>;
  }
}
