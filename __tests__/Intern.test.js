const Intern = require('../lib/Intern');

test("create school.", () => {
    const testSchool = "School Name";
    const employee = new Intern("Andrei", 1, "wento@.com", testSchool);
    expect(employee.school).toBe(testSchool);
  });
  
  test(" test getRole() should return \"Intern\"", () => {
    const returnValue = "Intern";
    const employee = new Intern("Andrei", 1, "wento@.com", "School Name");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("create office number()", () => {
    const testSchool = "School Name";
    const employee = new Intern("Andrei", 1, "wento@.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
  });
  