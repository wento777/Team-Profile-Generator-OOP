const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Create office number ", () => {
  const testOfficeNumber = 1;
  const employee = new Manager("Andrei", 1, "wento@.com", testOfficeNumber);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('getRole() should return "Manager"', () => {
  const returnValue = "Manager";
  const employee = new Manager("Andrei", 1, "wento@.com", 1);
  expect(employee.getRole()).toBe(returnValue);
});

test("Get office number via getOffice()", () => {
  const testOfficeNumber = 1;
  const employee = new Manager("Andrei", 1, "wento@.com", testOfficeNumber);
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});
