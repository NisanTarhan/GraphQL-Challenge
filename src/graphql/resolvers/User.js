import { events } from "../../data.js";

const User = {
    events: (parent, args) =>
        events.filter((event) => event.user_id === parent.id),
}

export default User;