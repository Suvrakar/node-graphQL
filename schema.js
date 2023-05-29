// schema.js
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    employee(id: Int!): Employee
  }

  type Mutation {
    addEmployee(name: String!, age: Int!): Employee
    removeEmployee(id: Int!): Employee
    updateEmployee(id: Int!, name: String, age:Int!) : Employee
  }

  type Employee {
    id: Int
    name: String
    age: Int
  }
`);

module.exports = schema;
