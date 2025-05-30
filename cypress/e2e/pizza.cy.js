it('Affichage de la composition des pizzas', ()=>{
    cy.visit("http://localhost:3000")
    //ajouter une rechercher si besoin pour tomber sur une pizza
    cy.contains('desc').should('exist')

})

it('Affichage du prix des pizzas', ()=>{
     cy.contains('price').should('exist')
})
