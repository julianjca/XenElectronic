# Xenelectronic

XenElectronic is one of electronics and home appliance store. To improve customers’ growth for their business, this application helps them to grow the business.

## Summary
  - [Getting Started](#getting-started)
  - [Runing the tests](#running-the-tests)
  - [Deployment](#deployment)
  - [Built With](#built-with)

## Getting Started
These instructions will get you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on how to deploy the project on a live system.

### Prerequisites

Things needed and how to install:
- npm (https://www.npmjs.com/get-npm) or yarn (https://classic.yarnpkg.com/en/docs/install/)
- node (installation guide https://nodejs.org/en/download/)
- postgres (https://www.postgresql.org/download/)
- sequelize-cli (https://www.npmjs.com/package/sequelize-cli)

### Installing
Clone the repository
```
git clone https://github.com/julianjca/XenElectronic.git
```

Install dependencies on both backend and frontend
```
cd backend
yarn 
or 
npm install
```

```
cd frontend
yarn 
or 
npm install
```

Install dependencies for root folder to run the app
```
yarn 
or 
npm install
```

Create .env.local on the front end
```
cd frontend
touch .env.local
```

Fill it with
```
API_URL = http://localhost:3030
```

### Migration and Seeding the back end
Make sure you have sequelize-cli installed.

Migration
```
cd backend
yarn migrate
or 
npm run migrate
```

Seed
```
cd backend
yarn seed
or 
npm run seed
```

### Run the app
```
yarn dev 
or 
npm run dev
```

## Running the tests

Back end test
```
cd backend
yarn test
or 
npm run test
```

Back end coverage

*I am using jest so jest has built in coverage feature*
`--coverage`
```
cd backend
yarn coverage
or 
npm run coverage
```

## Built With
  - [Express.js](http://expressjs.com/) - Back end
  - [Next.js](https://nextjs.org/) - Front end
  - [Sequelize](https://sequelize.org/) - ORM
  - [Jest](https://jestjs.io/) - Testing
  - [Postgres](https://www.postgresql.org/) - Database

### App screenshots

#### Coverage
![coverage](./screenshots/coverage.png)

#### Frontend App
![products](./screenshots/products.png)
![cart](./screenshots/cart.png)
![pay](./screenshots/pay.png)
![thank you](./screenshots/thank_you.png)
