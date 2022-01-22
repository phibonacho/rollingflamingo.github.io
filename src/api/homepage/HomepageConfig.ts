import {gql, useQuery} from "@apollo/client";
import {HomePageCopy} from "../types/HomePageCopy";

export interface HomepageConfig {
    title: string;
    introduction: string;
    aboutTitle: string;
    aboutDescription: string;
}

export const HOMEPAGE = gql`
query HomePageCopy {
  homepageSetting {
    data {
      attributes {
        mainPayoff
        introduction
        smallPayoff
        aboutDescription
      }
    }
  }
}
`;

export default function useHomePageData(): HomepageConfig {
    const { loading, data, error } = useQuery<HomePageCopy>(HOMEPAGE);

    if(loading || error)
        return {
            title: 'It\'s a me, Andreo!',
            introduction: 'Hi welcome.. (?)',
            aboutTitle: 'Keep<br>on<br>learning',
            aboutDescription: 'Ehm.... something went wrong?'
        };

    //@ts-ignore
    const { mainPayoff, introduction, smallPayoff, aboutDescription } = data.homepageSetting.data?.attributes;

    return {
        title: mainPayoff,
        introduction: introduction,
        aboutTitle: smallPayoff,
        aboutDescription: aboutDescription
    };
}