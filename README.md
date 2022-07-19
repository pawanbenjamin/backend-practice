# :airplane: Choose your own Adventure!

Use this starter code, and get practice with the process of writing a backend with PG and Express

## Suggested Development Path

### Have a look around!

- Checkout the file structure
- make sure you understand what scripts your have in your `package.json`

### Plan out what your Database will look like!

- Create at least two different tables
- Try to create relationships between the tables, either 1-Many, or Many-Many
- If you have a Many-Many relationship, remember to use a through table!

### Once you have planned out your DB, you can move on to coding!

<hr/>

## **Database:**

Start with the `client.js` file.
- Make sure to add your own `dbName`
- Make sure to also run `createdb <your-db-name>` in your terminal to create the DB locally

Move to the `seed.js` file.

- define some tables
- make sure you create and drop in the right order
- create some seed data in your `seedData.js` file
- write some **CRUD** database adapters (and seed some initial data)

### After you have successfully seeded your DB and have tested your adapters move on to Express!

<hr/>

## **Express:**

Start with the outermost `index.js`. This is where your express application lives

- Create RESTful API endpoints to serve your data
- Make sure to write an error handler!
