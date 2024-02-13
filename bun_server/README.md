# waycheck_bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To start as docker:
```bash
docker run --rm --name wc_bun -d -v $PWD/app:/home/bun/app -p 8080:8080 oven/bun:latest sleep 36000
```
To get into bash:
```bash
docker exec -it wc_bun bash 
```

If in Shell:
```bash
bun start
bun dev
```
Start will run Server, Dev will watch aswell.