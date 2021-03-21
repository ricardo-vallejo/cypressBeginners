/// <reference types="cypress" />

export class fillForm {

    gettingInitialPage() {
        cy.visit('https://ultimateqa.com/filling-out-forms/')
    }

    fillingFirstName(name) {
        cy.get('#et_pb_contact_name_0')
        .type(name, {force: true})
    }

    fillingFirstMessage(message) {
        cy.get('#et_pb_contact_message_0')
        .type(message)
    }

    fillingSecondName(name) {
        cy.get('#et_pb_contact_name_1')
        .type(name, {force: true})
    }

    fillingSecondMessage(message) {
        cy.get('#et_pb_contact_message_1')
        .type(message)
    }

    clickingFirstSubmit() {
        cy.get('#et_pb_contact_form_0 .et_pb_contact form').submit()
        cy.get('.et-pb-contact-message').should('contain.text', 'Form filled out successfully')
    }

    clickingSecondSubmit() {
        cy.get('#et_pb_contact_form_1 .et_pb_contact form').submit()
        cy.get('.et-pb-contact-message').should('contain.text', 'Success')
    }

    fillCaptcha() {
        cy.get('.et_pb_contact_captcha').then(($captcha) => {
            var firstD = $captcha.attr('data-first_digit')
            var secondD = $captcha.attr('data-second_digit')

            var numberF = parseInt(firstD)
            var numberS = parseInt(secondD)

            var result = numberF+numberS

            cy.get('.et_pb_contact_captcha').type(result)
        })
    }
}

export const formPage = new fillForm()