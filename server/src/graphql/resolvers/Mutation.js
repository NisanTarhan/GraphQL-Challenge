import { pubsub } from './Subscription.js'
import { users, events, locations, participants } from '../../data.js'
import {
    getCreatedData,
    getUpdatedData,
    getDeletedData,
    getCountOfAllDeletedData,
} from "../../../utils/index.js";

const Mutation = {
    createUser: (parent, { data }) =>
        getCreatedData(users, data, {
            key: "USER_CREATED",
            fieldName: "userCreated",
            pubsub,
        }),
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
    createEvent: (parent, { data }) =>
        getCreatedData(events, data, {
            key: "EVENT_CREATED",
            fieldName: "eventCreated",
            pubsub,
        }),
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
    createParticipant: (parent, { data }) =>
        getCreatedData(participants, data, {
            key: "PARTICIPANT_CREATED",
            fieldName: "participantAdded",
            pubsub,
        }),
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
}

export default Mutation;