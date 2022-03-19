import { users, locations, participants } from "../../data.js";


const Event = {
    user: (parent, args) => users.find((user) => user.id == parent.user_id),
    location: (parent, args) =>
        locations.find((location) => location.id == parent.location_id),
    participants: (parent, args) =>
        participants.filter((participant) => participant.event_id == parent.id),
};

export default Event;