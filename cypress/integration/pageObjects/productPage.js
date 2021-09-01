/// <reference types="cypress" />

export class productMethods {
    
    decreaseQuantity () {
        cy.get('.button-minus .icon-minus')
    }

    increaseQuantity () {
        cy.get('.button-plus .icon-plus')
    }

    addToCart() {
        cy.get('#add_to_cart > .exclusive')
    }
}

export const productPage = new productMethods()