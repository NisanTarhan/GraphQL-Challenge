# GraphQL Challenge

## Installation

Install the dependencies and devDependencies and start the server. Then you can check the query samples that are mentioned below in GraphQL Playground.

```sh
cd GraphQL-Challenge
npm i
npm run dev
```

# Query Samples

To get specific data from the list:

```js
query getUser {
  user(id: 1) {
    id
    username
    email
    events {
      title
      date
      user_id
    }
  }
}

query getEvent {
  event(id: 17) {
    id
    title
    date
    from
    to
    location_id
    user_id
    user {
      id
      username
    }
    location {
      id
      name
    }
    participants {
      id
      event_id
      user {
        username
      }
    }
  }
}

query getLocation{
  location(id: 1) {
    id
    name
    desc
    lat
    lng
  }
}

query getParticipant {
  participant(id: 1) {
    id
    user_id
    event_id
    user {
      id
      username
    }
    event {
      id
      title
    }
  }
}
```

To get a list from the data:
```js
query getAllUsers {
  users {
    id
    username
    email
  }
}

query getAllEvents {
  events {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
    location {
      id
      name
    }
    user {
      id
      username
    }
  }
}

query getAllLocaiton {
  locations {
    id
    name
    desc
    lng
  }
}

query getAllParticipants {
  participants {
    id
    user_id
    event_id
    user {
      id
      username
      email
    }
    event {
      id
      title
      date
    }
  }
}
```

# Mutation Samples

```js
mutation addUser {
  createUser(data: { username: "Nisan", email: "nisan_tarhan@hotmail.com" }) {
    id
    username
    email
  }
}

mutation updateUser {
  updateUser(id: "1", data: { username: "Ercan" }) {
    id
    username
    email
  }
}

mutation deleteUser {
  deleteUser(id: "1") {
    id
    username
    email
  }
}

mutation deleteAllUsers {
  deleteAllUsers {
    count
  }
}

mutation addEvent {
  createEvent(
    data: {
      title: "Yeni Event"
      location_id: "1"
      user_id: "1"
    }
  ) {
    id
    title
  }
}

mutation updateEvent {
  updateEvent(
    id: "1"
    data: { title: "Event Güncellendi!", location_id: "1", user_id: "1" }
  ) {
    id
    title
  }
}

mutation deleteEvent {
  deleteEvent(id: "1") {
    id
    title
  }
}

mutation deleteAllEvents {
  deleteAllEvents {
    count
  }
}

mutation addLocation {
  createLocation(data: { name: "Yeni Lokasyon", lat: 0.6 }) {
    id
    name
    lat
  }
}

mutation updateLocation {
  updateLocation(
    id: "1"
    data: { name: "Lokasyon Güncellendi!" }
  ) {
    id
    name
    lat
  }
}

mutation deleteLocation {
  deleteLocation(id: "1") {
    id
    name
    lat
  }
}

mutation deleteAllLocations {
  deleteAllLocations {
    count
  }
}

mutation addParticipant {
  createParticipant(data: { user_id: "1", event_id: "1" }) {
 		event_id
    user_id
  }
}

mutation updateParticipant {
  updateParticipant(
    id: "1"
    data: { user_id: "1", event_id:"1"}
  ) {
    event_id
    user_id
  }
}

mutation deleteParticipant {
  deleteParticipant(id: "1") {
    event_id
    user_id
  }
}

mutation deleteAllParticipants {
  deleteAllParticipants {
    count
  }
}
```

# Subscription Samples

```js
subscription UserCreate {
  userCreated {
    id
    username
    email
  }
}

subscription EventCreate {
  eventCreated {
    id
    title
  }
}

subscription ParticipantCreate {
  participantAdded {
    id
    user_id
  }
}
```
