# WayCheck FullStack

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