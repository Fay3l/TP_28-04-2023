import jsonfile from 'jsonfile';

describe('template spec', () => {
  const filename = 'C:/Users/fayel/Documents/Sprint_tdd/TP-Cypress/cypress/fixtures/example.json';

  it('Création du fichier JSON', () => {
    const data = { };
    jsonfile.writeFileSync(filename, data);
  });
  // it('passes', () => {
  //   cy.visit('http://localhost:3000')
  //   cy.get('#firstName').type('John')
  //   cy.get('#lastName').type('Doe')
  //   cy.get('#male').check()
  //   cy.get('#email').type('john.doe@example.com')
  //   cy.get('#password').type('password')
  //   cy.get('#confirmPassword').type('password')

  //   // Submit the form
  //   cy.get('.btn').click()

  //   // Check that the form data is displayed on the page
  //   cy.contains('John')
  //   cy.contains('Doe')
  //   cy.contains('Gender: Male')
  //   cy.contains('Email: john.doe@example.com')
  // });
  it('', () => {
    cy.fixture('users').then((data)=>{
      let datas = data.users;
      datas.forEach((userdata)=>{
        cy.visit('http://localhost:3000/');
        cy.get('#firstName')
          .type(userdata.firstName);
        cy.get('#lastName')
          .type(userdata.lastName);
        if(userdata.gender == "male"){
          cy.get('.form-body > :nth-child(4)')
            .click();
        }else if (userdata.gender == "female"){
          cy.get('.form-body > :nth-child(5)')
            .click();
        } else {
          cy.get('.form-body > :nth-child(6)')
            .click();
        }
        cy.get('#email')
          .type(userdata.email);
        cy.get('#password')
          .type(userdata.password);
        cy.get('#confirmPassword')
          .type(userdata.password);
        cy.get('.btn')
          .click();
        const data = jsonfile.readFileSync(filename);
        data.entries.push({ firstName: userdata.firstName, lastName: userdata.lastName, email: userdata.email , gender:userdata.gender,password: userdata.password });
        jsonfile.writeFileSync(filename, data);
      });
    });
  });

  it('', () => {

  });
});