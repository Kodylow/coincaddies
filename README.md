# CoinCaddies: Agent Workflows with Bitcoin Budgets

## Structure:

Base is a rust project with nostr wallet connect on top of fedimint. (may or may not use it with nwc, seeing if I can get the budgets to work, if not then I'll just use the fedimint-clientd api directly)

frontend: webcomponents based frontend

agents-server: elysia server to write out the agent actions etc and use an sqlite db to track workflows and budgets.

## Idea

User creates a task and a budget for it, 1 call for "assess" that creates an assessment of what tools it'll need, how much they cost, what its budget is, etc. Then the user clicks "Fund" and it pays in ecash to the agent to go complete the task. Sends back updates with what it's doing, when it's done, asks for more funds if necessary, etc.
