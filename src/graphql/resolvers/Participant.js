import { users, events } from "../../data.js";

const Participant = {
    user: (parent, args) => users.find((user) => user.id === parent.user_id),
    event: (parent, args) =>
        events.find((event) => event.id === parent.event_id),
};

export default Participant;