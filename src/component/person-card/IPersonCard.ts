import {IconProp} from "@fortawesome/fontawesome-svg-core";

export default interface IPersonCardProps {
  title: string;
  descriptions: Array<string>;
  featuredLinks: {
    icon: IconProp,
    url: string,
    alt?: string
  }[];
}

export interface IPersonCardState {

}
