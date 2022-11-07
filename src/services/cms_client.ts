import {GraphQLClient} from "graphql-request";
import createImageUrlBuilder from '@sanity/image-url';

const endpointTemplate = process.env.SANITY_CMS_EP ?? '';
const projectId = process.env.SANITY_PROJECT_ID ?? '';
const dataset = process.env.SANITY_DATASET ?? 'preview';
const token = process.env.SANITY_API_TOKEN ?? '';

const graphqlUrl = endpointTemplate.replace('{projectId}', projectId).replace('{dataset}', dataset);

const client = new GraphQLClient(graphqlUrl, {
    headers: {
        authorization: `Bearer ${token}`
    }
});

const sanityConfig = {
    dataset,
    projectId,
    useCdn: process.env.NODE_ENV !== 'production',
    apiVersion: '1'
}

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: string) =>
    imageBuilder.image(source).auto('format').fit('max');

export default client;