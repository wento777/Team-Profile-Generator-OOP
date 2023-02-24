const Engineer = require("../lib/Engineer");


test("Create GitHUb account.", () => {
    const testGithub = "GitHubUser";
    const employee = new Engineer("Andrei", 1, "wento@.com", testGithub);
    expect(employee.github).toBe(testGithub);
  });
  
  test("Test getRole() should return \"Engineer\"", () => {
    const returnValue = "Engineer";
    const employee = new Engineer("Andrei", 1, "wento@.com", "GitHubUser");
    expect(employee.getRole()).toBe(returnValue);
  });
  
  test("Test GitHub username via getGithub()", () => {
    const testGithub = "GitHubUser";
    const employee = new Engineer("Andrei", 1, "wento@.com", testGithub);
    expect(employee.getGithub()).toBe(testGithub);
  });
 