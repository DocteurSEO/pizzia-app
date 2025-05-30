it('Inscription', ()=>{
    cy.visit("http://localhost:3000/login")
    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
    cy.wait(1000)
    cy.get('input[placeholder="Adresse email"]').type("register.cypress@gmail.com")
    cy.get('input[placeholder="Mot de passe"]').type("Test12345")
    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
})