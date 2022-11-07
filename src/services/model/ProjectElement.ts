import {Project} from "../graphcms";
import {PortableText} from "@portabletext/react";
import {urlForImage} from "../cms_client";

export interface ProjectElement {
    title: string;
    description: any;
    tags: string[];
    image: string;
    caption: string;
    link: string;
    theme?: 'blue' | 'pink' | 'purple' | 'teal' | 'yellow';
}

export const convertToElement = (source: Project): ProjectElement => {
    return {
        ...source,
        description: source.descriptionRaw,
        image: urlForImage(source.image?.asset?._id ?? '').url(),
        caption: source.image?.caption
    } as ProjectElement;
}