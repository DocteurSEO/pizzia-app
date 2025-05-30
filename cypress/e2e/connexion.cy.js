import {UrlLogin} from "./../fixtures/connexion.json"
import {mdp} from "./../fixtures/connexion.json"
import {fakeMdp} from "./../fixtures/connexion.json"
import {email} from "./../fixtures/connexion.json"
import {fakeEmail} from "./../fixtures/connexion.json"

beforeEach(() =>{
    cy.visit(UrlLogin)
});


it('Connexion avec un utilisateur valide', () => {   
    cy.get('input[placeholder="Adresse email"]').type(email)
    cy.get('input[placeholder="Mot de passe"]').type(mdp)
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})

it('Connexion avec un mauvais utilisateur et un bon mdp', () => {
    cy.get('input[placeholder="Adresse email"]').type(fakeEmail)
    cy.get('input[placeholder="Mot de passe"]').type(mdp)
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})

it('Connexion avec un mauvais mdp mais bon utilisateur', () => {
    cy.get('input[placeholder="Adresse email"]').type(email)
    cy.get('input[placeholder="Mot de passe"]').type(fakeMdp)
    cy.get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
})