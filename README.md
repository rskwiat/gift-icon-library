# MediaBrix Icon Gallery 2025 Update

Bun + Hono + React

Open Sourcing an internal Icon Gallery from MediaBrix - updating the UI, and a
Hono Server

## Goals 2025

Rebuild this a third time as a Monorepo with a dedicated backend built in Hono. Instead of hardcoding the gallery `bun` now looks in the `api/public/images` directory and builds the api routes dynamically.

The API is now typesafe and built with openapi. 

The first interations of this app was built with CRA and all the state was
managed locally in the "gallery" component, the second generation was built with Express + React. For the 2025 udpate the goals were an evolution on the previous one.

1. Monorepo with API and Frontend Application using Bun / Vite.
2. Proper API served with Hono and TypeSafe
3. Proper image gallery and fetching using Zustand + TanStack Query
4. Tailwind 4


## Project Requirements

- node 20+
- npm 10+
- bun

## Setup

Download and install [bun](https://bun.sh/).

Create the env files

```
$ cp app/web/.env.sample app/web/.env
$ cp app/api/.env.sample app/api/.env
```

## Install all dependencies

```
$ bun install
```

## Run the API & Application

```
$ bun dev
```

## Tests

```
$ bun test
```

## API Routes


|              |                  |                                 |
| ------------ | ---------------- | ------------------------------- |
| Request Type | Path             | Description                     |
| GET          | /doc             | Open API Specification          |
| GET          | /reference       | Scalar API Documentation        |
| GET          | /heathcheck      | Healthcheck, make sure the application is running              |
| GET         | /all-icons      | Fetch all the icons            |
| GET          | /icon/{id} | Get one icon by id        |


