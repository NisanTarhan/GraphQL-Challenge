const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { events, locations, users, participants } = require("./data");
const {
  getCreatedData,
  getUpdatedData,
  getDeletedData,
  getCountOfAllDeletedData,
} = require("./utils");

const typeDefs = gql`
  #User
  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]!
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    email: String
  }

  #Event
  type Event {
    id: ID!
    title: String!
    desc: String
    date: String
    from: String
    to: String
    location_id: ID!
    user_id: ID!
    user: User!
    location: Location!
    participants: [Participant!]
  }

  input CreateEventInput {
    title: String!
    desc: String
    date: String
    from: String
    to: String
    location_id: ID!
    user_id: ID!
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }

  #Location
  type Location {
    id: ID!
    name: String!
    desc: String
    lat: Float!
    lng: Float
  }

  input CreateLocationInput {
    name: String!
    desc: String
    lat: Float!
    lng: Float
  }

  input UpdateLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  #Participant
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    user: User!
    event: Event!
  }

  input CreateParticipantInput {
    user_id: ID!
    event_id: ID!
  }

  input UpdateParticipantInput {
    user_id: ID
    event_id: ID
  }

  type DeleteAllOutput {
    count: Int!
  }

  type Query {
    #User
    users: [User!]!
    user(id: ID!): User!

    #Event
    events: [Event!]!
    event(id: ID!): Event!

    #Location
    locations: [Location!]!
    location(id: ID!): Location!

    #Participants
    participants: [Participant!]!
    participant(id: ID!): Participant!
  }

  type Mutation {
    #User
    createUser(data: CreateUserInput): User!
    updateUser(id: ID!, data: UpdateUserInput): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!

    #Event
    createEvent(data: CreateEventInput): Event!
    updateEvent(id: ID!, data: UpdateEventInput): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!

    #Location
    createLocation(data: CreateLocationInput): Location!
    updateLocation(id: ID!, data: UpdateLocationInput): Location!
    deleteLocation(id: ID!): Location!
    deleteAllLocations: DeleteAllOutput!

    #Participant
    createParticipant(data: CreateParticipantInput): Participant!
    updateParticipant(id: ID!, data: UpdateParticipantInput): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteAllParticipants: DeleteAllOutput!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id == args.id),
    events: () => events,
    event: (parent, args) => events.find((event) => event.id == args.id),
    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id == args.id),
    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id == args.id),
  },
  Mutation: {
    createUser: (parent, { data }) => getCreatedData(users, data),
    updateUser: (parent, { id, data }) => {
      const updatedUser = getUpdatedData(users, data, id);
      if (!updatedUser) throw new Error("User not found!");
      return updatedUser;
    },
    deleteUser: (parent, { id }) => {
      const deletedUser = getDeletedData(users, id);
      if (!deletedUser) throw new Error("User not found!");
      return deletedUser;
    },
    deleteAllUsers: () => getCountOfAllDeletedData(users),
    createEvent: (parent, { data }) => getCreatedData(events, data),
    updateEvent: (parent, { id, data }) => {
      const updatedEvent = getUpdatedData(events, data, id);
      if (!updatedEvent) throw new Error("Event not found!");
      return updatedEvent;
    },
    deleteEvent: (parent, { id }) => {
      const deletedEvent = getDeletedData(events, id);
      if (!deletedEvent) throw new Error("Event not found!");
      return deletedEvent;
    },
    deleteAllEvents: () => getCountOfAllDeletedData(events),
    createLocation: (parent, { data }) => getCreatedData(locations, data),
    updateLocation: (parent, { id, data }) => {
      const updatedLocation = getUpdatedData(locations, data, id);
      if (!updatedLocation) throw new Error("Location not found!");
      return updatedLocation;
    },
    deleteLocation: (parent, { id }) => {
      const deletedLocation = getDeletedData(locations, id);
      if (!deletedLocation) throw new Error("Location not found!");
      return deletedLocation;
    },
    deleteAllLocations: () => getCountOfAllDeletedData(locations),
    createParticipant: (parent, { data }) => getCreatedData(participants, data),
    updateParticipant: (parent, { id, data }) => {
      const updatedParticipant = getUpdatedData(participants, data, id);
      if (!updatedParticipant) throw new Error("Participant not found!");
      return updatedParticipant;
    },
    deleteParticipant: (parent, { id }) => {
      const deletedParticipant = getDeletedData(participants, id);
      if (!deletedParticipant) throw new Error("Participant not found!");
      return deletedParticipant;
    },
    deleteAllParticipants: () => getCountOfAllDeletedData(participants),
  },
  User: {
    events: (parent, args) =>
      events.filter((event) => event.user_id === parent.id),
  },
  Event: {
    user: (parent, args) => users.find((user) => user.id == parent.user_id),
    location: (parent, args) =>
      locations.find((location) => location.id == parent.location_id),
    participants: (parent, args) =>
      participants.filter((participant) => participant.event_id == parent.id),
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
