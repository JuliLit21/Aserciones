Cypress.Commands.add('DatosRegistro', ()=>{
     cy.get('[data-cy="input-nombres"]').type('Juan Carlos')
      cy.get('[data-cy="input-apellido"]').type('Perez Gomez')
      cy.get('[data-cy="input-telefono"]').type('3516669490')
      cy.get('[data-cy="input-dni"]').type('34567567')
      cy.get('[data-cy="select-provincia"]').type(`${'Buenos Aires'}{enter}`)
      cy.get('[data-cy="select-localidad"]').type(`${'17 de Agosto'}{enter}`)
      cy.get('[data-type="day"]').type(12)
      cy.get('[data-type="month"]').type(10)
      cy.get('[data-type="year"]').type(1985)
      
      cy.get('[data-cy="input-email"]').type('elefantenegro@gmail.com')
      cy.get('[data-cy="input-confirmar-email"]').type('elefantenegro@gmail.com')
      cy.get('[data-cy="input-password"]').type('Tato2520.')
      cy.get('[data-cy="input-repetir-password"]').type('Tato2520.')
      cy.get('[data-cy="btn-registrarse"]').click()

})