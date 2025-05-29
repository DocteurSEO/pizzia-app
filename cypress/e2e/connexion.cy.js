it('Connexion avec un utilisateur valide', () => {
    cy.visit('/ma-page')
    cy.contains('label', 'Email').should('be.visible').type(user)
    cy.contains('label', 'Password').should('be.visible').type(mdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Connexion avec un mauvais utilisateur et un bon mdp', () => {
    cy.visit('/ma-page')
    cy.contains('label', 'Email').should('be.visible').type(fakeuser)
    cy.contains('label', 'Password').should('be.visible').type(mdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Connexion avec un mauvais mdp mais bon utilisateur', () => {
    cy.visit('/ma-page')
    cy.contains('label', 'Email').should('be.visible').type(user)
    cy.contains('label', 'Password').should('be.visible').type(fakemdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Inscription', ()=>{
    cy.visit('/ma-page')
    cy.get('button').should('contains.text', 'Inscription')
    cy.contains('label', 'Email').should('be.visible').type(inscription)
    cy.contains('label', 'Password').should('be.visible').type(mdp2)
    cy.get('button').should('contains.text', 'Inscrit toi').click({force})
})

it('Affichage de la composition', ()=>{
    cy.get()


})

it('Affichage du prix des pizzas', ()=>{
    cy.contais()
})

it('Ajout au panier', ()=>{
    cy.contais()
})


it('Consultation du panier', ()=>{
    cy.contais()
})


it('Finalisation de la commande', ()=>{
    cy.contais()
})

it('Déconnexion', ()=>{
    cy.contais()
})
