it('Connexion avec un utilisateur valide', () => {
    cy.visit(baseUrl)
    cy.contains('label', 'Email').should('be.visible').type(user)
    cy.contains('label', 'Password').should('be.visible').type(mdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Connexion avec un mauvais utilisateur et un bon mdp', () => {
    cy.visit(baseUrl)
    cy.contains('label', 'Email').should('be.visible').type(fakeuser)
    cy.contains('label', 'Password').should('be.visible').type(mdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Connexion avec un mauvais mdp mais bon utilisateur', () => {
    cy.visit(baseUrl)
    cy.contains('label', 'Email').should('be.visible').type(user)
    cy.contains('label', 'Password').should('be.visible').type(fakemdp)
    cy.get('button').should('contains.text', 'Connexion').click({force})
})

it('Inscription', ()=>{
    cy.visit(baseUrl)
    cy.get('button').should('contains.text', 'Inscription')
    cy.contains('label', 'Email').should('be.visible').type(inscription)
    cy.contains('label', 'Password').should('be.visible').type(mdp2)
    cy.get('button').should('contains.text', 'Inscrit toi').click({force})
})

it('Affichage de la composition des pizzas', ()=>{
    cy.visit(baseUrl)
    //ajouter une rechercher si besoin pour tomber sur une pizza
    cy.contains('desc').should('exist')

})

it('Affichage du prix des pizzas', ()=>{
     cy.contains('price').should('exist')
})

it('Ajout au panier', ()=>{
    cy.contains()
})


it('Consultation du panier', ()=>{
    cy.contains()
})


it('Finalisation de la commande', ()=>{
    cy.contains()
})

it('Déconnexion', ()=>{
    cy.contains()
})
