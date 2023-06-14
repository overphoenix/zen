# ⛩ Zen ⛩

#### Nest + Prisma + Apollo + Angular 🏮 Full Stack GraphQL Starter Kit

Zen is a starter kit to build web portals as a stateful single-page application.  This kit has everything needed for building a customized user experience utilizing only TypeScript & GraphQL.  The project has end-to-end typings and this is achieved by combining several code generation packages together.

Specifically, this is an [Nx](https://nx.dev/) integrated monorepo, utilizing [Angular](https://angular.io/) for the frontend, [Nest](https://nestjs.com/) for the backend, and [Prisma](https://www.prisma.io/) for the data layer.
[Apollo](https://www.apollographql.com/) is deeply integrated throughout the entire tech stack, enabling for a modern approach to communication between the client and the server via GraphQL.

The project implements a fully featured authentication & authorization system with a minimalistic implementation.  This includes a login component, registration component, password change component and a fully featured password reset flow.  All of this while only having 1 model in the `schema.prisma` file, the `User` model. Guards & directives are also integrated for both [RBAC](https://docs.nestjs.com/guards#role-based-authentication) & [ABAC](https://casl.js.org/v6/en/guide/intro) authorization schemes and can be used in conjunction.  Everything needed for a malleable and robust user managment system has been wired up for you.

## Key Features

- 🏡 [Nx](https://nx.dev/), [Nest](https://nestjs.com/), [Prisma](https://www.prisma.io/), [Apollo](https://www.apollographql.com/) and [Angular](https://angular.io/).
- 💙 Everything is written in TypeScript, even code generation scripts are written in TypeScript.
- 🗃️ End-to-end type safety.  Code generation is preconfigured and polished to perfection.
- 📲 100% responsive design.
- 💻 100% cross-platform.  Develop on any OS and deploy to any OS, including mobile.
- ♾️ Minimal number of concepts required to understand. Unifying as many solutions as possible such that they are isomorphic between the frontend and backend.
- 🎐 Modern developer conveniences with high quality Visual Studio Code extensions preconfigured for the project.
- 🧰 [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) VSCode extension is the UI for all Nx workspaces.  This really helps to simplify the usage of the varying Angular & Nest schematics available in the ecosystem.
- ❤️ [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) for VSCode enables sophisticated IDE tooling over all Angular templates.
- 🚀 [Apollo extension](https://www.apollographql.com/docs/devtools/editor-plugins/) for VSCode is preconfigured and enables code completion for `gql` tags.
- 🛰️ [apollo-angular](https://the-guild.dev/graphql/apollo-angular/docs/development-and-testing/using-typescript) is our GraphQL client for Angular.  This project code generates everything needed so that all queries/mutations are ready for dependency injection within Angular and are strictly typed.
- 🐈‍⬛ [@nestjs/graphql - Schema first](https://docs.nestjs.com/graphql/quick-start#schema-first) is an exceptional way of building GraphQL servers.  This project configures and code generates everything needed to create a GraphQL server with end-to-end type safety.
- 🔵 [Pal.js Generator - SDL first](https://paljs.com/generator/sdl) to help generate the GraphQL API for Prisma. [Pal.js - Select](https://paljs.com/plugins/select) to solve the GraphQL N+1 problem for all queries for free.
- 🔐 Purpose-built user authentication & authorization modules. Full suite of authorization components, guards & directives for both Angular & Nest to tailor showing/hiding content and accepting/denying requests for a given user.
- 🧼 Enforced linting and formatting rules to ensure all contributions have predictable structure and clear legibility.
- 📖 [Storybook](https://storybook.js.org/docs/angular/get-started/why-storybook) is integrated to catalogue available components and makes it much simpler for discoverability of reusable components.

- 💾 Example deployment scripts to Kubernetes and instructions on [setting up a local Kubernetes cluster](https://github.com/ZenSoftware/zen/tree/base/deploy/dev) for testing purposes.
- ⚙️ Feature branches are available to `git merge` to enable features such as [data grids](https://www.telerik.com/kendo-angular-ui/components/grid/), [telemetry](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/), or [SocketIO](https://socket.io/).
- 🔌 Seamless communication with the API server. Interceptors have been inserted before all client service network calls to automatically handle authorization.  This in combination with the end-to-end type safety for all GraphQL requests makes communicating with the server incredibly simple.
- 🧪 [Jest](https://jestjs.io/) as the testing framework.  Clean output for results and extraordinarily versatile with [@nx/jest](https://nx.dev/packages/jest) as the test runner.
- 🎨 Modern responsive components & theme with SASS (.scss) as the CSS transpiler of choice.

---

## 🍣 Setup Instructions - [GitHub Repo](https://github.com/ZenSoftware/zen)

**Requirements**

- [Node v20](https://nodejs.org/)
- [Docker](https://www.docker.com/) or [Rancher Desktop](https://rancherdesktop.io/)

```bash
# Project setup steps
git clone https://github.com/ZenSoftware/zen.git
cd zen

# Make a copy of the .env file
cp .env.example .env

# Substitute npm for pnpm if you are using that
npm i

# Start the PostgreSQL server
docker-compose up -d

# Run the initial Prisma migration
npm run prisma:migrate
```
---

```bash
# Start the Nest API
npm run start:api

# Start the Angular app at localhost:4200
npm start
```

---

```bash
# Reload Apollo VSCode extension via command palette after the API has started
>Apollo: Reload schema
```

---

## 🥢 GraphQL Features

- [x] [Nest GraphQL](https://docs.nestjs.com/graphql/resolvers) resolvers to [Prisma Client](https://www.prisma.io).
- [x] [Apollo GraphQL SDL bindings to Prisma](https://paljs.com/generator/sdl) generated via [Pal.js CLI](https://paljs.com/cli/generator)! Thank you [**@AhmedElywa**](https://github.com/paljs) 🎎
- [x] [PrismaSelect](https://paljs.com/plugins/select/) to eliminate overfetching.  Queries are delegated to Prisma which solve the GraphQL N+1 problem for free.
- [x] Custom npm scripts to code generate the Nest GraphQL api on Prisma schema changes.
- [x] [@graphql-codegen/typescript-apollo-angular](https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular) of [apollo-angular](https://www.apollographql.com/docs/angular/) services to enable simple, type safe access to the GraphQL API within Angular. 🎀 Modern dev tooling configured for the project, allowing for [Apollo extension for VS Code](https://www.apollographql.com/docs/devtools/editor-plugins/) to provide auto-completion within `gql` tags for all `.ts` files.
- [x] An Angular `GraphQLModule` to simplify the configuration of the `ApolloClient` to enable/disable the varying `ApolloLink` features.
  - [x] [HttpBatchLink](https://apollo-angular.com/docs/data/network#httpclient-1) for batching several GraphQL requests that occur within a short debounce interval. This really helps to alleviate network congestion.
  - [x] [UploadLink](https://www.npmjs.com/package/apollo-upload-client) to give `ApolloClient` HTTP multi-part form requests capabilities. Enabling the uploading of files via [GraphQLUpload](https://github.com/jaydenseric/graphql-upload).
  - [x] [GraphQLWsLink](https://www.apollographql.com/docs/react/data/subscriptions/#2-initialize-a-graphqlwslink) for GraphQL subscriptions over websockets.

---

## 🍱 API Authentication, Performance & Scaling

- [x] [Nest authentication](https://docs.nestjs.com/techniques/authentication), user registration and login system designed specifically to work for an [Angular SPA (single page application)](https://angular.io/). This project provides responsive, "mobile first" interfaces for the standard set of authentication features.
- [x] `New account component`
- [x] `Login component` with remember me option.
- [x] `Sign in with Google` via OpenID Connect.
- [x] `Forgot password component` and full password reset flow.
- [x] `Password change component` for user dashboards.
- [x] [Nest guards & directives](https://github.com/ZenSoftware/zen/blob/base/apps/api/src/app/auth) for both RBAC & ABAC authorization schemes.  ABAC is implemented with [@casl/prisma](https://casl.js.org/v6/en/package/casl-prisma) & [@casl/angular](https://casl.js.org/v6/en/package/casl-angular).  The user's CASL rules are sent from the server to the client and updates the `@casl/angular` ability.  This unifies the permissions across both the server and the client. Fully exploiting CASL's isomorphic capabilities.
- [x] `Angular route guards` and `Angular directives` to show/hide content depending on the user's roles or CASL abilities.

---

## 🍵 Modern Web Components and Responsive UIs

- [x] SASS chosen as the CSS transpiler of choice.
- [x] [Angular Material](https://material.angular.io/) components & theme.
- [x] Mobile first approach to build the framework's core components (login form, etc).
- [x] Directly import [Bootstrap reset, utilities, & grid](https://www.amadousall.com/the-good-parts-of-bootstrap-4-you-are-missing-in-your-angular-material-projects/) features through SASS (.scss) imports and exclude the Bootstrap theme and conflicting component styles. These features are missing from Angular Material and greatly simplify the creation of responsive, mobile first applications.
- [x] [Bootswatch](https://bootswatch.com/) SASS (.scss) variables integrated for a large assortment of high quality color themes to choose from.

---

### 🎏 Optional Tech Integrations

- [x] [Electron](https://www.electronjs.org/) branch with new npm script `npm run start:electron` to launch the app within Electron.
- [ ] [Capacitor](https://capacitorjs.com/) branch - planned
- [x] [SocketIO](https://socket.io/) branch demonstrates how to implement a Nest WebSocket Gateway with user authentication.
- [x] [Kendo UI](https://www.telerik.com/kendo-angular-ui/components/grid/) branch - which includes [@zen/grid](https://github.com/ZenSoftware/zen/tree/kendo/libs/grid).  `<zen-grid>` renders robust and reliable data grids over all of the Prisma models within the project, with minimal configuration needed.
- [x] [OpenTelemetry](https://opentelemetry.io/) branch demonstrates how to integrate and expose telemetry data for the API server.

---

## 🍡 Developer Operations

- [x] [Nx for project management](https://nx.dev/angular) to allow for the use of [Nx Console extensions for VSCode](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console). Nx Console is a GUI interface for monorepos that adds a lot of modern developer conveniences. It also helps to simplify the use of the various Angular & Nest code generation schematics available in the ecosystem.
- [x] [Angular Language Service for VSCode](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) for modern IDE tooling.
- [x] npm scripts for versioned releases of the Nest **api** server as a containerized Docker image. [node:18-alpine](https://hub.docker.com/_/node?tab=description&ref=hackernoon.com) is used as the Docker container base image and the appropriate `tsconfig.app.json` configurations are being applied for the Nest app.
- [x] Example [Kubernetes](https://kubernetes.io/) deployment scripts.
- [x] Enforced code formatting via [Prettier](https://prettier.io/) & [import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort), guaranteeing all contributions to the project are standardized with predictable structure and clear legibility.
- [x] [Commitizen](https://github.com/commitizen/cz-cli) for standardizing git commits.
- [x] [@nestjs-modules/mailer](https://github.com/nest-modules/mailer) for automated emailing and pre-configured [Handlebars e-mail templates](https://handlebarsjs.com/guide/#what-is-handlebars) for the various web portal's emailing needs. Handlebars has similar double bracket `{{contextField}}` template interpolation, akin to Angular templates. Custom HTML e-mail triggers within Nest are made very simple by simply passing a `JSON context` and the template's `filename` as parameters to the class injectable `MailService`.
