const Employee = require("../lib/Employee");


test("Create an new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
  
  test("Test name.", () => {
    const name = "Andrei";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  
  test("Test ID.", () => {
    const id = 1;
    const employee = new Employee("Andrei", id);
    expect(employee.id).toBe(id);
  });
  
  test("Test email.", () => {
    const email = "wento@.com";
    const employee = new Employee("Andrei", 1, email);
    expect(employee.email).toBe(email);
  });
  
  test("Test name via getName()", () => {
    const testName = "Andrei";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
  });
  
  test("Test id via getId()", () => {
    const testID = 1;
    const employee = new Employee("Andrei", testID);
    expect(employee.getId()).toBe(testID);
  });
  
  test("Test email via getEmail()", () => {
    const testEmail = "wento@.com";
    const employee = new Employee("Andrei", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const returnValue = "Employee";
    const employee = new Employee("Andrei", 1, "wento@.com");
    expect(employee.getRole()).toBe(returnValue);
  });