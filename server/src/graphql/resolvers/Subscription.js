import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

const Subscription = {
    userCreated: {
        subscribe: () => pubsub.asyncIterator(["USER_CREATED"]),
    },
    eventCreated: {
        subscribe: () => pubsub.asyncIterator(["EVENT_CREATED"]),
    },
    participantAdded: {
        subscribe: () => pubsub.asyncIterator(["PARTICIPANT_CREATED"]),
    },
};

export default Subscription;