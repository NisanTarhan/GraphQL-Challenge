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

To get a list from the data.
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