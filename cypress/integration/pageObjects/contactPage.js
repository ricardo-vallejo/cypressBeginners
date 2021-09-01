/// <reference types="cypress" />

import 'cypress-file-upload'

export class contactMethods {
    getSubject (optionValue) {
        cy.get('#id_contact').select(optionValue)
    }

    getEmail (email) {
        cy.get('#email').type(email)
    }

    getOrder (orderId) {
        cy.get('#id_order').type(orderId)
    }

    getAttachFile (fileName) {
        cy.get('#fileUpload').attachFile(fileName)
    }

    getMessage (message) {
        cy.get('#message').type(message)
    }

    validations(fieldToValidate) {

        switch (fieldToValidate) {
            case 'SubjectOne':
                cy.get('#desc_contact1').should('contain', 'If a technical problem occurs on this website')
                break;
            case 'SubjectTwo':
                cy.get('#desc_contact2').should('contain', 'For any question about a product, an order')
                break;
            case 'EmailOk':
                cy.get('#email').parent('p').should('have.attr', 'class', 'form-group form-ok')
                break;
            case 'EmailError':
                cy.get('#email').parent('p').should('attr', 'class', 'form-group form-error')
                break;
            case 'EmailMandatory':
                cy.get('.alert-danger > ol > li').should('contain', 'Invalid email address')
                break;
            case 'MessageMandatory':
                cy.get('.alert-danger  > ol > li').should('contain', 'The message cannot be blank.')
                break;
            case 'SubjectMandatory':
                cy.get('.alert-danger  > ol > li').should('contain', 'Please select a subject from the list provided')
                break;
            case 'SuccessPost':
                cy.get('.alert-success').should('contain', 'Your message has been successfully sent to our team')
                break
            default:
                break;
        }
        
    }

    getSubmit () {
        cy.get('#submitMessage').click()
    }
}

export const contactPage = new contactMethods()