it('Connexion avec un utilisateur valide', () => {
    cy.visit("http://localhost:3000/login")
    cy.get('input[placeholder="Adresse email"]').type("Test.cypress@gmail.com")
    cy.get('input[placeholder="Mot de passe"]').type('Test123')
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})

it('Connexion avec un mauvais utilisateur et un bon mdp', () => {
    cy.visit("http://localhost:3000/login")
    cy.get('input[placeholder="Adresse email"]').type("Testfake.cypress@gmail.com")
    cy.get('input[placeholder="Mot de passe"]').type("Test123")
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})

it('Connexion avec un mauvais mdp mais bon utilisateur', () => {
    cy.visit("http://localhost:3000/login")
    cy.get('input[placeholder="Adresse email"]').type("Test.cypress@gmail.com")
    cy.get('input[placeholder="Mot de passe"]').type("Test1234")
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})

it('Inscription', ()=>{
    cy.visit("http://localhost:3000/login")
    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
    cy.wait(1000)
    cy.get('input[placeholder="Adresse email"]').type("register.cypress@gmail.com")
    cy.get('input[placeholder="Mot de passe"]').type("Test12345")
    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
})

it('Affichage de la composition des pizzas', ()=>{
    cy.visit("http://localhost:3000")
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
