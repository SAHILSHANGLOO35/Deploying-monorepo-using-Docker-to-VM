FROM oven/bun:latest

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws

RUN bun install

COPY . .

RUN bun install
RUN bun run db:generate

EXPOSE 8001

CMD [ "bun", "run", "start:ws" ]