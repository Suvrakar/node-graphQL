// resolvers.js
const employees = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
];

const resolvers = {
  hello: () => {
    return "Hello world!";
  },
  employee: ({ id }) => {
    return employees.find((employee) => employee.id === id);
  },
  addEmployee: ({ name, age }) => {
    const id = employees.length + 1;
    const newEmployee = { id, name, age };
    employees.push(newEmployee);
    return newEmployee;
  },
  removeEmployee: ({ id }) => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      const removedEmployee = employees.splice(index, 1)[0];
      return removedEmployee;
    }
    return null;
  },
  updateEmployee: ({ id }) => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      const updatedEmployee = { ...employees[index], name, age };
      employees[index] = updatedEmployee;
      return updatedEmployee;
    }
    return null;
  },
};

module.exports = resolvers;
