# App Spec

This document will be used to describe the specifications for this project. Since
the scope of this project can easily get out of control, organizing and determining
what the extent of this project will be **upfront** should be a priority.

## Summary

This application will be a basic chat app with users, rooms and messages.
It will follow material design, and support users via external oauth logins.

It can be comparable to google-messages, but with only the bare minimum features,
and "corner cutting" features added for simplicity.

## Tech stack

This application will be a TypeScript based Mongodb-Express-React-Node (MERN) stack app.
This should be easier to implement and maintain as all parts of the technology except
React are familiar, which should help sped up the project's development.

## External APIs

The only external API this project will need initially will be oauth2, which will
be used to manage user account logins.

## Infrastructure

To simplify this project, everything will be managed within Github and Digital Ocean.
This project will use Digital Ocean's App Platform to host and run the stack together.
The database will be a managed mongodb instance on Digital ocean.

### Hosting costs

Currently I believe the hosting cost will 20$ per month. This will work
for the short-term vision of this project, with a longer-term goal of moving
**everything** into a a docker-compose based setup that can be self-hosted.

This will be left out of the initial scope for simplicity.

## User stories

Below are a list of user stories that cover the basic specification of the project.

- User can login and view rooms they are a part of
- User can get their user-id from their profile page
- User can logout
- User can go into a room they are a part of and view messages of that room
- User can create a new room
- User can send a message to a room they are a part of
- User can add another user into a room they are a part of via their i
- User can leave a room they are a part of, unless they are the owner
- User can delete the room they are the owner of
- User can remove a user from the room if they are the owner

## Project Plan

This project will follow a very accelerated time-table with focus on front-end
development with React, and bare minimum back-end development. Where the back-end
exists primarily to support learning React within a full-stack TS based project.

**Currently there's only time for roughly 2 weeks of full-time development.**
This should be enough to get a good focus on React, with enough time to dabble
within the more familiar back-end.

### Tasks

- [x] Setup basic boilerplate projects
- [x] Setup basic CI/CD pipeline to verify builds, ignore deployments
- [x] Setup app-spec for project
- [x] Install known client-side libraries
- [ ] Setup React libraries and routes for app.
- [ ] Build "App Shell" UI
- [ ] Build `login` page
- [ ] Build `room-list` page
  - [ ] Build `room-list` component
  - [ ] Build `room-list-search` component
- [ ] Build `api-services` library with mock-data
- [ ] Build `room-create` page
  - [ ] Build `room-create-form` component
- [ ] Build `room-messages` page
  - [ ] Build `room-user` component
  - [ ] Build `room-message` component
  - [ ] Build `room-message-form` component
- [ ] Build `user` page - will show their ID that needs to be shared
- [ ] Build `room-users` component
  - [ ] Build `room-users-form` component
- [ ] Setup oauth2 and integrate into app+routes
- [ ] Build basics of api-service interfaces to support the client-side
- [ ] Build `login` api
- [ ] Build `logout` api
- [ ] Build `user` api - returns the current user
- [ ] Build `rooms` api
- [ ] Build `room-create` api
- [ ] Build `room-remove` api
- [ ] Build `room-update` api
- [ ] Build `room-messages` api
- [ ] Build `room-messages-create` api
- [ ] Build `room-users` api
- [ ] Build `room-user-add` api
- [ ] Build `room-user-remove` api
- [ ] Review/catch-up on features missing from week 1
- [ ] Update CI/CD pipeline to deploy to DO
- [ ] Look back-into cypress
