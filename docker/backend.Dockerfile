FROM oven/bun:latest

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/backend ./apps/backend

RUN bun install

COPY . .

RUN bun install
RUN bun run db:generate

EXPOSE 8000

CMD [ "bun", "run", "start:backend" ]