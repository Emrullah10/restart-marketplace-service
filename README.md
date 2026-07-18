# restart-marketplace-service

Marketplace microservice of the **Restart** platform: a microservices-based system with separate services for marketplace operations, IAM (authentication & authorization) and operations, consumed by React Native and Flutter mobile clients.

## Tech Stack

Node.js + Express, modular structure (`packages/modules/datasource`, `routes`, `src`).

## Related repositories

[restart-iam-service](https://github.com/Emrullah10/restart-iam-service) (auth) · [restart-operation-service](https://github.com/Emrullah10/restart-operation-service) · [restart_react_app](https://github.com/Emrullah10/restart_react_app) (React Native client) · [restart_app_flutter](https://github.com/Emrullah10/restart_app_flutter) (Flutter client)

## Getting started

```bash
npm install
npm start
```

Create a `.env` file with your local configuration before running.
