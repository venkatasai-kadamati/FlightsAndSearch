# ✈️ FlightFinder - Flight Search and Booking App
FlightFinder is an app that allows users to search for flights between cities, view flight details, compare prices across multiple airlines, and book flights.

# 🛫 Key Features
1. Intuitive flight search with origin, destination and date range
1. Detailed flight cards with key details like duration, stops, airline etc.
1. Price comparison from multiple airlines for the same route
1. Secure login and user account management
1. Booking flights and selecting seats
1. Payment integration and booking confirmation
## The app follows a microservices + SOA architecture. Key components:
- Presentation Layer : 
The React frontend that users interact with
- Business Logic Layer : 
Node.js backend with domain logic and services
Makes calls to Infra layer as needed
- Infrastructure Layer : 
MySQL database for persisted user and flight data
3rd Party APIs like Stripe, Flight Search etc.

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```
