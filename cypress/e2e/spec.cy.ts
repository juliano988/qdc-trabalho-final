let postId = 0

describe('CRUD process', () => {

  it('READ Posts', () => {
    cy.visit('http://localhost:3000/#/posts')
  })

  it('CREATE Posts', () => {
    cy.visit('http://localhost:3000/#/posts/create');
    cy.get('#title').type('teste' + Date.now());
    cy.get('#body').type('teste' + Date.now());
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
    cy.get('#id').get('input').invoke('val').then(function (val) { postId = Number(val) })
  })

  it('UPDATE Posts', () => {
    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.get('#title').clear();
    cy.get('#body').clear();
    cy.get('#title').type('teste' + Date.now());
    cy.get('#body').type('teste' + Date.now());
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
  })

  it('DELETE Posts', () => {
    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.get('.MuiButton-text').click();
  })


})