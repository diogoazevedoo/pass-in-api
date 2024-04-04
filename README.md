Pass.in is an **in-person event participant management application**.

The tool allows the organizer to register an event and open a public registration page.

Registered participants can issue a credential for check-in on the day of the event.

The system will scan the participant's credential to allow entry into the event.

## Requirements

### Functional Requirements

- [x] The organizer must be able to register a new event;
- [x] The organizer must be able to view event data;
- [x] The organizer must be able to view the participant list;
- [x] The participant must be able to register for an event;
- [x] The participant must be able to view their registration badge;
- [x] The participant must be able to check in at the event;

### Business Rules

- [x] A participant can only register for an event once;
- [x] A participant can only register for events with available spots;
- [x] A participant can only check in at an event once;

### Non-functional Requirements

- [x] The check-in at the event will be carried out through a QRCode;

## API Documentation (Swagger)

For API documentation, visit the link: http://localhost:3333/docs

## Database

In this application, we will use a relational (SQL) database. For the development environment, we will proceed with SQLite due to the ease of setup.