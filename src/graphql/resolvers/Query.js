import { users, events, locations, participants } from '../../data.js'

const Query = {
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
}

export default Query;