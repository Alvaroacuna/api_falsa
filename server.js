
const express = require("express");
const { random } = require("faker");
var faker = require('faker');
const app = express();
const port = 8000;


faker.locale = "es";


app.get("/api/users/new", (req, res) => {
    
    var usuario = {

        Carnet: faker.random.number(999999999) + "-" + faker.random.number(9),
        Nombre: faker.name.firstName(),
        Apellido: faker.name.lastName(),
        Celular: faker.phone.phoneNumber(),
        Email: faker.internet.email(),
        Password: faker.internet.password()
        
    };
    res.json( usuario );
});

app.get("/api/companies/new", (req, res) => {
    
    var empresa = {
    
        Carnet: faker.random.number(999999999) + "-" + faker.random.number(9),
        Nombre: faker.name.firstName(),
        Street: faker.address.streetName() ,
        City: faker.address.city(),
        State: faker.address.state(),
        CodigoPostal: faker.address.zipCode(),
        Country: faker.address.country()
    
    };
    res.json( empresa );


app.get("/api/user/company", (req, res) => {
    
    var company = {
    
        Carnet: faker.random.number(999999999) + "-" + faker.random.number(9),
        Nombre: faker.name.firstName(),
        Apellido: faker.name.lastName(),
        Celular: faker.phone.phoneNumber(),
        Email: faker.internet.email(),
        Password: faker.internet.password(),
        Carnet: faker.random.number(999999999) + "-" + faker.random.number(9),
        Nombre: faker.name.firstName(),
        Street: faker.address.streetName() ,
        City: faker.address.city(),
        State: faker.address.state(),
        CodigoPostal: faker.address.zipCode(),
        Country: faker.address.country()
            
        };
        res.json( company );
    });
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );