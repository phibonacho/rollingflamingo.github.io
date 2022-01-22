/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROJECT_THEME } from "./globalTypes.d";

// ====================================================
// GraphQL query operation: getAllProjects
// ====================================================

export interface getAllProjects_projects_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface getAllProjects_projects_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: getAllProjects_projects_data_attributes_image_data_attributes | null;
}

export interface getAllProjects_projects_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: getAllProjects_projects_data_attributes_image_data | null;
}

export interface getAllProjects_projects_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string | null;
  display: string | null;
}

export interface getAllProjects_projects_data_attributes_tags_data {
  __typename: "TagEntity";
  attributes: getAllProjects_projects_data_attributes_tags_data_attributes | null;
}

export interface getAllProjects_projects_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: getAllProjects_projects_data_attributes_tags_data[];
}

export interface getAllProjects_projects_data_attributes {
  __typename: "Project";
  title: string | null;
  description: string | null;
  link: string | null;
  theme: ENUM_PROJECT_THEME | null;
  image: getAllProjects_projects_data_attributes_image | null;
  tags: getAllProjects_projects_data_attributes_tags | null;
}

export interface getAllProjects_projects_data {
  __typename: "ProjectEntity";
  attributes: getAllProjects_projects_data_attributes | null;
}

export interface getAllProjects_projects {
  __typename: "ProjectEntityResponseCollection";
  data: getAllProjects_projects_data[];
}

export interface getAllProjects {
  projects: getAllProjects_projects | null;
}
