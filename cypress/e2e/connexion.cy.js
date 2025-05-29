it('Connexion', () => {
cy.visit('/ma-page')
cy.contains('label', 'Email').should('be.visible').type('test@gmail.com')
cy.contains('label', 'Password').should('be.visible').type('123456')
cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Inscription', ()=>{
cy.visit('/ma-page')
cy.get('button').should('contains.text', 'Inscription')
cy.contains('label', 'Email').should('be.visible').type('test@gmail.com')
cy.contains('label', 'Password').should('be.visible').type('123456')
cy.get('button').should('contains.text', 'Inscrit toi').click({force})
})

it('Des pizzas?', ()=>{
    cy.contais()
})
