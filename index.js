const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { events, locations, users, participants } = require("./data");

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    events: [Event!]!
  }

  type Event {
    id: Int!
    title: String!
    desc: String
    date: String
    from: String
    to: String
    location_id: Int!
    user_id: Int!
    user: User!
    location: Location!
    participants: [Participant!]!
  }

  type Location {
    id: Int!
    name: String!
    desc: String
    lat: Float!
    lng: Float
  }

  type Participant {
    id: Int!
    user_id: Int!
    event_id: Int!
    user: User!
    event: Event!
  }

  type Query {
    #User
    users: [User!]!
    user(id: Int!): User!

    #Event
    events: [Event!]!
    event(id: Int!): Event!

    #Location
    locations: [Location!]!
    location(id: Int!): Location!

    #Participants
    participants: [Participant!]!
    participant(id: Int!): Participant!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === args.id),
    events: () => events,
    event: (parent, args) => events.find((event) => event.id === args.id),
    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id === args.id),
    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id === args.id),
  },

  User: {
    events: (parent, args) =>
      events.filter((event) => event.user_id === parent.id),
  },
  Event: {
    user: (parent, args) => users.find((user) => user.id === parent.user_id),
    location: (parent, args) =>
      locations.find((location) => location.id === parent.location_id),
    participants: (parent, args) =>
      participants.filter((participant) => participant.event_id === parent.id),
  },
  Participant: {
    user: (parent, args) => users.find((user) => user.id === parent.user_id),
    event: (parent, args) =>
      events.find((event) => event.id === parent.event_id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      //options
    }),
  ],
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
