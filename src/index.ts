import { GraphQLServer } from 'graphql-yoga';
import * as soap from 'soap';

soap.createClient('./src/wsiv.wsdl', function(err, client) {
  if (err) {
    throw new Error('Unable to create SOAP client');
  }

  const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Query: {
        lines: async (
          _: any,
          args: any,
          { client }: { client: soap.Client }
        ) => {
          return new Promise((resolve, reject) => {
            client.getLines(
              { line: { reseau: { code: 'metro' } } },
              (err: any, result: any) => {
                if (err) {
                  reject();
                }

                resolve(result.return);
              }
            );
          });
        }
      },
      Line: {
        id: (parent: any) => parent.id,
        code: (parent: any) => parent.code,
        name: (parent: any) => parent.name,
        stations: (
          parent: any,
          args: any,
          { client }: { client: soap.Client }
        ) => {
          return new Promise((resolve, reject) => {
            client.getStations(
              { station: { line: { id: parent.id } } },
              function(err: any, result: any) {
                if (err) {
                  reject();
                }

                resolve(result.return.stations);
              }
            );
          });
        }
      }
    },
    context: { client }
  } as any);

  server.start(({ port }) => console.log(`Server is running on port ${port}`));
});
