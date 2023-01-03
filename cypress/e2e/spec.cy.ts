let postId = 0

describe('CRUD process', () => {

  it('READ Posts', () => {
    cy.visit('http://localhost:3000/#/posts');
    cy.get('table');
  })

  it('CREATE Posts', () => {
    cy.visit('http://localhost:3000/#/posts/create');
    cy.get('#title').type('teste' + Date.now());
    cy.get('#body').type('teste' + Date.now());
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
    cy.get('#id').get('input').invoke('val').then(function (val1) {
      postId = Number(val1);
      cy.visit('http://localhost:3000/#/posts/' + postId);
      cy.get('#id').get('input').invoke('val').then(function (val2) {
        expect(val1).to.be.equal(val2);
      })
    })
  })

  it('UPDATE Posts', () => {

    let newTitleAndBody = 'teste' + Date.now()

    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.get('#title').clear();
    cy.get('#body').clear();
    cy.get('#title').type(newTitleAndBody);
    cy.get('#body').type(newTitleAndBody);
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.get('#title').invoke('val').then(function (val) {
      expect(val).to.be.equal(newTitleAndBody);
    });
    cy.get('#body').invoke('val').then(function (val) {
      expect(val).to.be.equal(newTitleAndBody);
    });

  })

  it('DELETE Posts', () => {
    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.get('.MuiButton-text').click();
    cy.get('.ra-confirm').click();
    cy.visit('http://localhost:3000/#/posts');
    cy.visit('http://localhost:3000/#/posts/' + postId);
    cy.wait(5000);
    cy.get('.css-w4sorp-RaConfigurable-root > :nth-child(1) > span').invoke('text').then(function (val) {
      expect(val).to.be.equal('Post #undefined');
    })
  })


})