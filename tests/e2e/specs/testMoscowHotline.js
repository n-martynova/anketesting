describe('Moscow Hotline Test', function() {
    it('Fills and sends Moscow Hotline', function() {
        cy.visit('http://localhost:8080/hotline')

        cy.get('[name=first_last_name]')
            .type('Мартынова Надежда')

        cy.get('[name=email]')
            .type('n.martynova@rocketguys.com')

        cy.get('[name=phone]')
            .type('+9636225881')

        let aboutText = 'Сопроводительные письма очень важны, потому что работа в чате напрямую связана с письменным выражением своих мыслей. Если письмо шаблонное или состоит из двух предложений (250 символов) — считаем, что его нет 🙂Сопроводительные письма очень важны, потому что работа в чате напрямую связана с письменным выражением своих мыслей. Если письмо шаблонное или состоит из двух предложений (250 символов) — считаем, что его нет 🙂'
        
        cy.get('[name=about]')
            .invoke('val', aboutText).trigger('change')

        cy.get('[name=rocket]')
            .invoke('val', aboutText).trigger('change')

        cy.get('.question-wrapper input').first().check('Реклама в соцсетях')

        cy.get('button[type=submit]').click()

        cy.get('.start-test').click()

        cy.get('.gap-wrapper').each(function($item) {
            let correct = $item[0].__vue__.correct
            cy.wrap($item).click().find(`[data-name='${correct}']`).click()
        })

        cy.get('.button').click()
        cy.get('.start-test').click()
        cy.wait(500)
        cy.get('.question-wrapper').each(function($item) {
            let correct = $item[0].__vue__.correct

            cy.wrap($item).find('input')
                .then(($input) => {
                    if ($input[0].getAttribute('type') === 'text') {
                        cy.wrap($input).type(correct[0] || correct)

                    } else if ($input[0].getAttribute('type') === 'radio' || $input[0].getAttribute('type') === 'checkbox') {
                        cy.wrap($input).check(correct)
                    }
                })
        })

        cy.get('#saveKot').click()

        // https://docs.google.com/spreadsheets/d/1DtDIR_WwjIV1uNlGSYehcJ2pZqEKbyxKIyY3QSvyY8s/edit?ts=5ce7e756#gid=0
    })
})