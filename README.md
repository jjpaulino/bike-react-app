# React Bike App

Simple react application to diplay a list of bike stations in a table:

## Requisites
Before you start, make sure you have the following installed:

* [`nvm`](https://github.com/creationix/nvm) used for installing and managing multiple version of [Node](https://nodejs.org/en/) (and dependencies) on the same machine.
* [Docker](https://www.docker.com/) containers are used to mangage our development environment and make sure everyone is running Clay the same way.

## Installation
```bash
npm install
```

## Running

### Dev environment

To start your local instance, run `docker-compose up` inside the root of the project. It will run a script
that will configure your local environment and uses Docker to spin it up.

```bash
$ docker-compose up
```

## Documentation

Once the server is up, you'll end up seeing a list of stations inside a table that you can click on and see 
a more detailed view of the item selected. This list is provided by an external API.

## Next Steps

There is a lot of room for improvement, starting from the dev environment being able to hot reload changes (2 hours) to decrease development time to more error comunication to the user when some things are happening within the app, adding some loading state in the first screen (1 hour), maybe add a google maps mini map for stations that have the location set (maybe a day or less), use modals instead of an entire different page to display the selected items (half a day or less) so that we can keep the user in the same page.
