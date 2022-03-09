# mern-stack-docker

Template repository for a full-stack JavaScript application with a React front-end, Node.js API and MongoDB database.

---

### Starting the containers

Run `docker-compose up [-d]` to start the services.

### React Front-End

Visit `http://127.0.0.1:3000` in your browser to see the React front-end. The files for this service are in `./web`. Edit them as you would normally when building a React SPA.

### Node.js API

Visit `http://127.0.0.1:8000` in your browser to see the NodeJS API. The files for this service are in `./api`. Edit them as you would normally when building a Node.js server/API.

### Mongo Express

Visit `http://127.0.0.1:8081` in your browser to use the MongoDB admin interface.

---

## Installing Dependencies

Run `docker exec -it <container name> <command>`.

Where `<container-name>` is the name of the container as specified in `./docker-compose.yml` and `<command>` is the command you wish to run (i.e. `npm install dotenv --save`).
