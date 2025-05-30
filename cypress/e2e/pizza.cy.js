import {UrlPizza} from "./../fixtures/pizza.json"

beforeEach(() =>{
    cy.visit(UrlPizza)
});

it('Affichage des pizzas', ()=>{
 
    cy.get(".cardProduct-module__B2l_pG__productCard").contains('Pizza Hawaïenne').should('be.visible')

})


it('Affichage de la composition des pizzas', ()=>{
 
    cy.contains('desc').should('exist')

})

it('Affichage du prix des pizzas', ()=>{
     cy.get(':nth-child(1) > :nth-child(3) > strong').should('have.text', '1 €')
})
