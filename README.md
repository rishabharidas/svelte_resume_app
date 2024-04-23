# resume app on SvelteKit(skeleton UI)
this project is not fully completed; but you can use this as a reference for sveltekit + edgedb based preojects


```bash
# build with docker for first time
docker compose up --build
```

## Developing

```bash
# use for later
docker compose up
```
if you are adding adding new fields to the database do run 

initalize edgedb if necessary and run the following

```bash
edgedb migration create
edgedb migrate

npx @edgedb/generate edgeql-js
```

