import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "8armok8k",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skqKDDdxcr2PVHGlKNyZHbjO4OjVj0oVtDip1SbtYCx03odNUb7hWRS99v9OMTD3cfSIDO5yeOcel8zdO9Ugrv34O0bHLUuQ6zNVQQaqhWFewo042d7LvFjf67t8zjnD1Sh4E9ais120X5I8EB7gXftF9fPUzz77Ds7jCb4mr714CJZN9zuX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

