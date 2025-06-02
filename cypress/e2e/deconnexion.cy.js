import {UrlLogin} from "./../fixtures/connexion.json"
import {mdp} from "./../fixtures/connexion.json"
import {email} from "./../fixtures/connexion.json"

it('Déconnexion', ()=>{
    cy.visit(UrlLogin) 
    cy.get('input[placeholder="Adresse email"]').type(email)
    cy.get('input[placeholder="Mot de passe"]').type(mdp)
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
    cy.wait(1000)
    cy.get('.navbar-module__QXtwcq__btn_deconnexion').should('be.visible').click({force : true})
    cy.wait(500)
    cy.get('.page-module__X_Z_4a__form').contains('Connexion').should('be.visible')
})

