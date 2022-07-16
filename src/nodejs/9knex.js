//Knex.js is a JavaScript query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle. It can be used with callbacks and promises.
// It supports transactions and connection pooling.

const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'user12',
        password: 's$cret',
        database: 'mydb'
    }
}

const knex = require('knex')(options);

knex.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });

//Create table
    
knex.schema.createTable('cars', (table) => {
  table.increments('id')
  table.string('name')
  table.integer('price')
}).then(() => console.log("table created"))
   .catch((err) => { console.log(err); throw err })
   .finally(() => {
    knex.destroy();
}); 

//Knex.js inserting data
const cars = [
    { name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 },
]

knex('cars').insert(cars).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
});

//Knex.js selecting all rows
knex.from('cars').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });

//Knex.js restricting output with WHERE
const options = {
    client: 'mysql2',
    connection: "mysql://root:andrea@localhost:3306/mydb"
}

const knex = require('knex')(options);

knex.from('cars').select("name", "price").where('price', '>', '50000')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
//Knex.js ordering rows
knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });        


//To find 4th Highest salary query will be :

//Select Salary from table_name order by Salary DESC limit 3,1;