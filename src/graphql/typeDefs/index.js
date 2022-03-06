import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typesArray = loadFilesSync("src/graphql/**/*.graphql", { extensions: ['graphql'] })

const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;