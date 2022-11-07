import {FetchProjects, FetchProjectsQuery, FetchProjectsQueryVariables} from "./graphcms.d";
import client from "./cms_client";
import {convertToElement, ProjectElement} from "./model/ProjectElement";

export const fetchProjects = async (): Promise<{ projects: Array<ProjectElement> }> => {
    const {allProject}: FetchProjectsQuery = await client.request<FetchProjectsQuery, FetchProjectsQueryVariables>(FetchProjects);

    return {
        projects: allProject.map(project => convertToElement(project))
    };
};