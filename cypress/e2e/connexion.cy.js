it('Connexion', () => {
cy.visit('/ma-page')
cy.contains('label', 'Email').should('be.visible').type('test@gmail.com')
cy.contains('label', 'Password').should('be.visible').type('123456')
cy.get('button').should('contains.text', 'Connexion')
})

it('Inscription', ()=>{
cy.visit('/ma-page')
cy.get('button').should('contains.text', 'Inscription')
cy.contains('label', 'Email').should('be.visible').type('test@gmail.com')
cy.contains('label', 'Password').should('be.visible').type('123456')
cy.get('button').should('contains.text', 'Inscrit toi')
})


