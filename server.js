const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class User {
    constructor() {
        this.userId = faker.string.uuid(),
            this.firstName = faker.person.firstName(),
            this.lastName = faker.person.lastName(),
            this.phone = faker.phone.number(),
            this.email = faker.internet.email(),
            this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.location.streetAddress();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/user/new", (req, res) => {
    res.json( { newUser: new User() } );
});

app.post("/api/company/new", (req, res) => {
    res.json( { newCompany: new Empresa() } );
});

app.post("/api/user/company", (req, res) => {
    res.json( { newCompany: new Empresa(), newUser: new User()  } );
});



app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`) );