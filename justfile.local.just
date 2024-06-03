dev:
  mprocs -c mprocs.yaml
wscat:
  mprocs -c mprocs-wscat.yaml
install:
    cd frontend && bun install
    cd agents-server && bun install
    cargo build
