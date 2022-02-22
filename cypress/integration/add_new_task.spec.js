describe('add task', () => {
  it('user can add new tasks', () => {
    //Visit and Login if neccessary
    cy.visit('http://localhost:5000/tasks');
    //Check task remaining counter matches the number of tasks
    //Click on Add New Tasks
    //Add Title and Date and submit task
    //Check new task added with correct info
    //Verify counter increases by one
  });
});
