set dotenv-load := true

dev:
  mprocs

reset db:
  docker-compose down -v && docker-compose up -d

seed:
    bun run migrate && bun run seed
