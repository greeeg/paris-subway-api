import { GraphQLServer } from 'graphql-yoga';
import * as soap from 'soap';
import resolvers from './resolvers';

soap.createClient('./src/wsiv.wsdl', function(err, client) {
  if (err) {
    throw new Error('Unable to create SOAP client');
  }

  const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { client }
  } as any);

  server.start(({ port }) => console.log(`Server is running on port ${port}`));
});
