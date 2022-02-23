describe('initial test', () => {
  it('get site to render', () => {
    //Visit and Login if neccessary
    cy.visit('http://localhost:3000/');
    //Check task remaining counter matches the number of tasks
    //Click on Add New Tasks
    cy.findByRole('button', { name: /add new task/i }).click();
    //Add Title and Date and submit task
    cy.findByRole('textbox', { name: /title:/i }).type(
      'Scrape ice off freezer'
    );
    cy.findByRole('combobox', { name: /date:/i }).select('Monday');
    cy.findByRole('button', { name: /submit/i }).click();
    //Check new task added with correct info
    //Verify counter increases by one
  });
});
