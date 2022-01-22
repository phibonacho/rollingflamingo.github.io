/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageCopy
// ====================================================

export interface HomePageCopy_homepageSetting_data_attributes {
  __typename: "HomepageSetting";
  mainPayoff: string;
  introduction: string;
  smallPayoff: string;
  aboutDescription: string;
}

export interface HomePageCopy_homepageSetting_data {
  __typename: "HomepageSettingEntity";
  attributes: HomePageCopy_homepageSetting_data_attributes | null;
}

export interface HomePageCopy_homepageSetting {
  __typename: "HomepageSettingEntityResponse";
  data: HomePageCopy_homepageSetting_data | null;
}

export interface HomePageCopy {
  homepageSetting: HomePageCopy_homepageSetting | null;
}
