describe('Workflow Profile Test', function() {
    it('Fills and sends Single Profile for Support Cap', function() {
        cy.visit('http://localhost:8080/profile?role=supportCap')

        cy.get('[name=first_last_name]')
            .type('Мартынова Надежда')

        cy.get('[name=email]')
            .type('n.martynova@rocketguys.com')

        cy.get('[name=phone]')
            .type('+9636225881')

        let aboutText = 'Сопроводительные письма очень важны, потому что работа в чате напрямую связана с письменным выражением своих мыслей. Если письмо шаблонное или состоит из двух предложений (250 символов) — считаем, что его нет 🙂Сопроводительные письма очень важны, потому что работа в чате напрямую связана с письменным выражением своих мыслей. Если письмо шаблонное или состоит из двух предложений (250 символов) — считаем, что его нет 🙂'
    
        cy.get('[name=about]')
            .invoke('val', aboutText).trigger('change')
            
        cy.get('.question-wrapper input').first().check('Реклама в соцсетях')

        cy.get('button[type=submit]').click()

        // https://docs.google.com/spreadsheets/d/1USHwbf70KCcdqX43h45kE6knj2nElM7B-DDHNlieT2Q/edit#gid=0
    })
})