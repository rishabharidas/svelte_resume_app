# resume app on SvelteKit(skeleton UI)


```bash
# build with docker for first time
docker compose up --build
```

## Developing

```bash
# build with docker for first time
docker compose up
```
if you are adding adding new fields to the database do run 

initalize edgedb if necessary and run the following

```bash
edgedb migration create
edgedb migrate

npx @edgedb/generate edgeql-js
```

