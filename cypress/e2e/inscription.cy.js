import {UrlLogin} from "./../fixtures/inscription.json"
import {email} from "./../fixtures/inscription.json"
import {mdp} from "./../fixtures/inscription.json"
import {lastName} from "./../fixtures/inscription.json"
import {firstName} from "./../fixtures/inscription.json"
import {validateFakeMdp} from "./../fixtures/inscription.json"
import {validateMdp} from "./../fixtures/inscription.json"


beforeEach(() =>{
    cy.visit(UrlLogin)
});

it('Inscription avec de bonnes données', ()=>{

    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
    
    cy
        .wait(80000)
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Nom"]').type(lastName)
        .get('input[placeholder="Prénom"]').type(firstName)
        .get('.page-module__IMkl-G__input[type="password"]').type(mdp)

    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
})

// it('Inscription avec un mauvais mot de passe en validation', ()=>{

//     cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
//     cy.wait(1000)
//     cy
//         .get('input[placeholder="Adresse email"]').type(email)
//         .get('input[placeholder="Nom"]').type(lastName)
//         .get('input[placeholder="Prénom"]').type(firstName)
//         .get('input[placeholder="Mot de passe"]').type(mdp)
//         .get('input[placeholder="Valider mot de passe"]').type(validateFakeMdp)


//     cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
// })