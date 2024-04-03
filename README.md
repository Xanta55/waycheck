# WayCheck FullStack

A Discordbot which is to be deployed in a container.
WayCheck is supposed to be an Discord-Idle-Game, in which Users can walk or fish. Every once in a while they can perform a WayCheck, which will make other actions faster.

## Bun
To install dependencies:
```bash
bun install
```

To run:
```bash
bun run ./src/index.ts
bun start
```

Check [packages.json](./bun_server/package.json) and dont forget to add a .env file at './bun_server/.env'!

Structure should be:
```
TOKEN=
CLIENT_ID=
APPLICATION_ID=
PUBLIC_KEY=
```

## Docker
To start everything:
```
# watch output
docker-compose up --build

# start headless
docker-compose up --build -d 
```

To end everything (run this after closing every time!):
```
docker-compose down
```

To get rid of all dangling images:
```
docker image prune
```
