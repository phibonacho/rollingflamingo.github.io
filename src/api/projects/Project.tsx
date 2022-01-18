import Tags from "../tag/Tag";
import {gql, useQuery} from "@apollo/client";
import {getAllProjects, getAllProjects_projects_data} from "../types/getAllProjects";

export interface Project {
    title: string;
    description: string;
    tags: Tags[];
    image: string;
    link: string;
    theme?: 'blue' | 'pink' | 'purple' | 'teal' | 'yellow' | 'red';
}

export const PROJECTS = gql`
query getAllProjects {
  projects {
    data {
      attributes {
        title
        description
        link
        theme
        image {
          data {
            attributes {
              url
            }
          }
        }
        tags {
          data {
            attributes {
              name
              display
            }
          }
        }
      }
    }
  }
}
`;

export default function useAsyncProjects() {
    const { loading, error, data } = useQuery<getAllProjects>(PROJECTS);

    const result = !data || !data.projects
        ? [] as Array<Project>
        : data.projects.data.map((p: getAllProjects_projects_data) => {
            if(!p.attributes)
                return null;

            const { title, link, description, theme, image, tags } = p.attributes;

            return {
                title: title,
                description: description,
                link: link,
                theme: theme,
                image: `${image?.data?.attributes?.url}` || '',
                tags: tags?.data.map(tag => ({
                    name: tag.attributes?.name,
                    display: tag.attributes?.display
                } as Tags))
            } as Project;
        });

    return {
        loading: loading,
        error: error,
        projects: result
    };
}