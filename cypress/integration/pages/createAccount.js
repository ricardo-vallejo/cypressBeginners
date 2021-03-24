/// <reference types="cypress" />

export class createAccount {

    gettingInitialPage() {
        cy.visit('https://courses.ultimateqa.com/users/sign_up')
    }

    fillingInformation() {
        cy.fixture('signUpData').as('userData')
        cy.get('@userData').then((userData) => {
            cy.get('[id="user[first_name]"]').type(userData.firstName)
            cy.get('[id="user[last_name]"]').type(userData.lastName)
            cy.get('[id="user[email]"]').type(userData.email)
            cy.get('[id="user[password]"]').type(userData.password)
        })
    }

    checkingTerms() {
        cy.get('[id="user[terms]"]').check()
    }

    clickSubmit() {
        cy.get('.form__button-group > .button').click()

        cy.intercept('POST', 'https://api-js.mixpanel.com/track/**').as('captchaResponse')
        cy.wait('@captchaResponse').then(({request, response}) => {
            expect(response).property('statusCode').to.equal(200)
            expect(response).property('statusMessage').to.equal('OK')
        })
    }

    checkCaptchaRequest() {
        console.log('Test')
    }

}

export const createAccountPage = new createAccount()